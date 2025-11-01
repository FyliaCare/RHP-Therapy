# RHP Therapy - Render Deployment Guide

## 🚀 Quick Deploy to Render

### Prerequisites
- GitHub account with repository access
- Render account (free tier available)
- Stripe account for payment processing

---

## Option 1: Deploy with Blueprint (Recommended)

### Step 1: Connect Repository
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub account
4. Select the `FyliaCare/RHP-Therapy` repository
5. Render will automatically detect `render.yaml`

### Step 2: Configure Environment Variables
The following variables will be automatically configured:
- `NODE_ENV` → production
- `DATABASE_URL` → From PostgreSQL database
- `NEXTAUTH_SECRET` → Auto-generated
- `NEXTAUTH_URL` → Your Render web service URL

**You need to manually add:**
1. `STRIPE_PUBLISHABLE_KEY` - Get from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. `STRIPE_SECRET_KEY` - Get from Stripe Dashboard
3. `STRIPE_WEBHOOK_SECRET` - Create webhook in Stripe for your Render URL

### Step 3: Deploy
1. Click "Apply" to create services
2. Render will:
   - Create PostgreSQL database
   - Build Next.js application
   - Run Prisma migrations
   - Deploy the application

---

## Option 2: Manual Deployment

### Step 1: Create PostgreSQL Database
1. Go to Render Dashboard → "New +" → "PostgreSQL"
2. Name: `rhp-therapy-db`
3. Database: `rhptherapy`
4. User: `rhptherapy_user`
5. Region: Choose closest to your users
6. Plan: Free (for testing) or Starter
7. Click "Create Database"
8. **Save** the Internal Database URL

### Step 2: Create Web Service
1. Go to Render Dashboard → "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `rhp-therapy-web`
   - **Region**: Same as database
   - **Branch**: `master`
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### Step 3: Environment Variables
Add these in the "Environment" section:

```bash
NODE_ENV=production
DATABASE_URL=<paste-your-internal-database-url>
NEXTAUTH_URL=https://rhp-therapy-web.onrender.com
NEXTAUTH_SECRET=<generate-with-command-below>
STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### Step 4: Deploy
Click "Create Web Service" - Render will:
1. Clone your repository
2. Install dependencies
3. Generate Prisma Client
4. Build Next.js
5. Run database migrations
6. Start the application

---

## Post-Deployment Setup

### 1. Configure Stripe Webhooks
1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Endpoint URL: `https://your-app.onrender.com/api/webhooks/stripe`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the webhook secret to `STRIPE_WEBHOOK_SECRET`

### 2. Seed Database (Optional)
Run this in the Render Shell:
```bash
npm run prisma:seed
```

### 3. Verify Deployment
- Visit your Render URL: `https://rhp-therapy-web.onrender.com`
- Test key pages:
  - Homepage: `/`
  - Shop: `/shop`
  - Portal: `/portal`
  - Admin: `/admin`

---

## Database Management

### Access Prisma Studio
1. In Render Dashboard, go to your web service
2. Click "Shell" tab
3. Run: `npm run prisma:studio`
4. Access via the provided URL

### Run Migrations Manually
```bash
npm run prisma:migrate
```

### Backup Database
1. Go to PostgreSQL service in Render
2. Click "Backups" tab
3. Download backup or schedule automatic backups

---

## Scaling & Performance

### Free Tier Limitations
- Web service spins down after 15 minutes of inactivity
- 750 hours/month of runtime
- PostgreSQL: 90-day data retention, 1GB storage

### Upgrade Options
1. **Starter Plan ($7/month)**
   - No spin down
   - Custom domains
   - More resources

2. **Standard Plan ($25/month)**
   - Increased resources
   - Better performance
   - Priority support

### Optimize Performance
1. **Enable Caching**
   - Next.js automatically caches static pages
   - Consider Redis for session storage

2. **Database Optimization**
   - Add indexes to frequently queried fields
   - Use connection pooling

3. **CDN for Assets**
   - Use Cloudflare or Vercel for static assets
   - Optimize images (Next.js Image optimization)

---

## Custom Domain Setup

### 1. Add Domain in Render
1. Go to your web service settings
2. Click "Custom Domains"
3. Add your domain (e.g., `rhptherapy.com`)

### 2. Configure DNS
Add these records to your domain registrar:

**For root domain:**
```
Type: A
Name: @
Value: <Render IP from dashboard>
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: rhp-therapy-web.onrender.com
```

### 3. Update Environment Variables
```bash
NEXTAUTH_URL=https://rhptherapy.com
NEXT_PUBLIC_APP_URL=https://rhptherapy.com
```

---

## Monitoring & Logs

### View Logs
1. Go to your web service in Render
2. Click "Logs" tab
3. Filter by:
   - Deploy logs
   - Runtime logs
   - Error logs

### Set Up Alerts
1. Go to service settings
2. Enable email notifications for:
   - Deploy failures
   - Service health issues
   - Database issues

---

## Troubleshooting

### Build Fails
**Check:**
- Node version compatibility (use Node 18+)
- Environment variables are set correctly
- Database URL is accessible

**Common fixes:**
```bash
# Clear build cache
rm -rf .next node_modules
npm install
```

### Database Connection Issues
**Verify:**
- DATABASE_URL is correctly formatted
- PostgreSQL service is running
- Connection string includes `?schema=public`

**Test connection:**
```bash
npx prisma db push
```

### Application Won't Start
**Check:**
- Build completed successfully
- All required env vars are set
- Port 3000 is not hardcoded (use `process.env.PORT`)

---

## Environment Variables Reference

### Required
| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host/db` |
| `NEXTAUTH_URL` | Your application URL | `https://your-app.onrender.com` |
| `NEXTAUTH_SECRET` | Secret for session encryption | Generate with `openssl rand -base64 32` |

### Stripe (Required for payments)
| Variable | Description |
|----------|-------------|
| `STRIPE_PUBLISHABLE_KEY` | Public Stripe key |
| `STRIPE_SECRET_KEY` | Secret Stripe key |
| `STRIPE_WEBHOOK_SECRET` | Webhook signing secret |

### Optional
| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `production` |
| `SMTP_HOST` | Email server | - |
| `SMTP_PORT` | Email port | `587` |

---

## Continuous Deployment

### Auto-Deploy on Push
Render automatically deploys when you push to master:

```bash
git add .
git commit -m "Update features"
git push origin master
```

### Deploy Branches
1. Create new branch: `git checkout -b staging`
2. In Render, create a new web service for staging
3. Set branch to `staging`
4. Each branch gets its own URL

---

## Cost Estimation

### Free Tier (Good for testing)
- **Web Service**: Free (with limitations)
- **PostgreSQL**: Free (90 days, 1GB)
- **Total**: $0/month

### Production Setup
- **Web Service (Starter)**: $7/month
- **PostgreSQL (Starter)**: $7/month
- **Total**: $14/month

### High Traffic
- **Web Service (Standard)**: $25/month
- **PostgreSQL (Standard)**: $20/month
- **Total**: $45/month

---

## Security Best Practices

1. **Never commit `.env` files**
2. **Use environment variables** for all secrets
3. **Enable HTTPS** (automatic on Render)
4. **Set up Stripe webhooks** securely
5. **Regular database backups**
6. **Monitor logs** for suspicious activity

---

## Support & Resources

- **Render Docs**: https://render.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Prisma Deployment**: https://www.prisma.io/docs/guides/deployment
- **Stripe Integration**: https://stripe.com/docs/webhooks

---

## Quick Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database operations
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate   # Run migrations
npm run prisma:studio    # Open Prisma Studio
npm run prisma:seed      # Seed database

# Deploy to production
git push origin master
```

---

**🎉 Your RHP Therapy platform is now live on Render!**

For issues or questions, check the logs in Render Dashboard or contact support.
