# RHP Therapy - Advanced Client Portal

## 🎉 New Features

### Complete Client Portal System
An advanced, feature-rich client portal has been added to provide customers with comprehensive account management and health tracking capabilities.

## 📱 Portal Pages

### 1. Dashboard (`/portal`)
**Main hub for client activities**
- Welcome header with membership tier display (Gold Member)
- 4 key statistics cards:
  - Total Orders (24)
  - Loyalty Points (2,450)
  - Health Score (85%)
  - Active Subscriptions (1)
- Quick action buttons:
  - Reorder products
  - Book consultation
  - Track orders
  - View rewards
- Recent orders section (3 most recent)
- Health goals tracking with progress bars
- Upcoming reminders sidebar (medication, subscription, appointments)
- Loyalty rewards card with tier progress
- Referral program promotion

### 2. Orders (`/portal/orders`)
**Complete order management system**
- Search and filter functionality
- Order history with detailed information:
  - Order status tracking
  - Product details
  - Payment information
  - Shipping address
- Real-time order timeline:
  - Order placed
  - Payment confirmed
  - Processing
  - Shipped
  - Out for delivery
  - Delivered
- Actions per order:
  - View full details
  - Download invoice
  - Reorder
  - Write review (for delivered orders)

### 3. Health Profile (`/portal/health`)
**Comprehensive health tracking**
- 5 tabs: Overview, Metrics, Medications, Goals, Appointments
- Overall health score (85/100)
- Health metrics tracking:
  - Blood pressure (120/80 mmHg)
  - Blood sugar (95 mg/dL)
  - Weight (75 kg)
  - History for each metric
  - Trend indicators (improving/stable/declining)
- Medication management:
  - MAEFORX dosage tracking
  - Schedule and reminders
  - Adherence rate (92%)
  - Instructions and notes
- Health goals with progress tracking:
  - Maintain healthy blood pressure (85%)
  - Improve sleep quality (70%)
  - Regular supplement intake (92%)
- Appointments history (past and upcoming)

### 4. Subscriptions (`/portal/subscriptions`)
**Auto-delivery subscription management**
- Active subscription overview:
  - Product: MAEFORX (2 bottles)
  - Frequency: Every 30 days
  - Price: GH₵94.99
  - Next delivery: 2025-11-10
  - Total savings: GH₵15.00
- Subscription actions:
  - Edit frequency
  - Change quantity
  - Pause subscription
  - Cancel subscription
  - Skip next delivery
- Delivery history with tracking
- Subscription benefits display:
  - Save 15%
  - Free shipping
  - Flexible schedule

### 5. Consultations (`/portal/consultations`)
**Book and manage expert consultations**
- Consultation type selection:
  - Virtual (video call)
  - In-person (Accra clinic)
- 3 specialist practitioners:
  - Dr. Kwame Mensah (Digestive Health & Wellness, 15 years)
  - Dr. Ama Asante (Women's Health & Holistic Care, 12 years)
  - Dr. Kofi Osei (Cardiovascular & Immune Support, 18 years)
- Booking system:
  - Date picker
  - Time slot selection
  - Reason for consultation
- Upcoming appointments display
- Past consultations with notes
- Join virtual consultation button

### 6. Rewards & Loyalty (`/portal/rewards`)
**Points-based loyalty program**
- Current points balance: 2,450
- Membership tiers:
  - Silver (0+ points) - 5% discount
  - Gold (2,000+ points) - 10% discount [CURRENT]
  - Platinum (3,000+ points) - 15% discount
- Redeemable rewards:
  - GH₵10 discount (200 points)
  - GH₵25 discount (500 points)
  - GH₵50 discount (1,000 points)
  - Free shipping (150 points)
  - Free consultation (800 points)
  - Gift box (1,500 points)
- Ways to earn points:
  - Make purchases (10 points per GH₵1)
  - Refer friends (500 points per referral)
  - Subscribe (100 points per renewal)
  - Write reviews (50 points per review)
- Referral program:
  - Personal referral code: RHPJ2M5K
  - Give GH₵25, Get 500 points
  - Share via WhatsApp/Email
  - Referral stats tracking (12 friends, 6,000 points earned)
- Points history with transactions

### 7. Notifications (`/portal/notifications`)
**Comprehensive notification center**
- Real-time notifications for:
  - Order updates (delivered, shipped, processing)
  - Health reminders (medication times)
  - Promotions (special offers, discount codes)
  - Subscription renewals
  - Loyalty rewards (points earned)
  - Consultations (appointment reminders)
- Filter options:
  - All
  - Unread (4 unread)
  - Orders
  - Health
  - Promotions
- Mark as read/unread functionality
- Delete notifications
- Notification preferences:
  - Order updates ✓
  - Health reminders ✓
  - Promotions & offers ✓
  - Loyalty rewards ✓
  - Newsletter ✓

## 🎨 Portal Layout

### Sidebar Navigation (Desktop & Mobile)
- Fixed sidebar with smooth transitions
- User profile section (name, membership tier)
- Navigation links with active state highlighting
- Bottom actions: Settings, Back to Store
- Mobile: Hamburger menu with slide-out sidebar
- Responsive design for all screen sizes

### Mobile Optimization
- Mobile-first responsive design
- Touch-friendly buttons and interactions
- Collapsible sidebar navigation
- Sticky mobile header with menu button
- Optimized layouts for small screens

## 🛠️ Technical Implementation

### Technologies Used
- **Next.js 16.0.1**: App Router with server components
- **TypeScript**: Full type safety
- **Tailwind CSS v4**: Modern utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library
- **React Hot Toast**: Toast notifications
- **Zustand**: State management (cart)

### File Structure
```
app/portal/
├── layout.tsx                 # Portal layout with sidebar
├── page.tsx                   # Dashboard
├── orders/
│   └── page.tsx              # Order history & tracking
├── health/
│   └── page.tsx              # Health profile & metrics
├── subscriptions/
│   └── page.tsx              # Subscription management
├── consultations/
│   └── page.tsx              # Book consultations
├── rewards/
│   └── page.tsx              # Loyalty & rewards
└── notifications/
    └── page.tsx              # Notification center
```

### Key Features Implemented
- ✅ Responsive sidebar navigation
- ✅ Active route highlighting
- ✅ Mobile-friendly hamburger menu
- ✅ Smooth animations with Framer Motion
- ✅ Interactive forms and inputs
- ✅ Modal dialogs (e.g., cancel subscription)
- ✅ Progress bars and status indicators
- ✅ Copy to clipboard functionality
- ✅ Tab navigation within pages
- ✅ Expandable/collapsible sections
- ✅ Filter and search functionality
- ✅ Toast notifications
- ✅ Time-based data formatting

## 🔗 Integration

### Navigation Updates
1. **Main Navigation** (`components/layout/Navbar.tsx`)
   - Added "Portal" link to main navigation menu

2. **Homepage Hero** (`components/home/Hero.tsx`)
   - Changed secondary CTA from "Learn More" to "Client Portal"
   - Direct access to portal from homepage

### Access Points
- Main navbar: `/portal`
- Homepage hero: "Client Portal" button
- User account dropdown: "My Portal"
- Direct URL access: `https://rhptherapy.com/portal`

## 📊 Sample Data

All portal pages include realistic sample data:
- 4 orders with detailed tracking information
- Health metrics with 3-week history
- 1 active MAEFORX subscription
- 3 specialist practitioners
- 2 appointments (1 upcoming, 1 completed)
- 2,450 loyalty points with transaction history
- 8 notifications across different categories

## 🚀 Getting Started

### Access the Portal
1. Navigate to `/portal` from any page
2. Click "Client Portal" on the homepage
3. Click "Portal" in the main navigation

### Navigation
- Use the sidebar to navigate between portal sections
- On mobile, tap the hamburger menu to access navigation
- Each page has a "Back to Portal" link to return to dashboard

## 🎯 Future Enhancements

Potential improvements for the portal:
- [ ] User authentication integration (NextAuth)
- [ ] Real-time data from Prisma/PostgreSQL
- [ ] Payment processing for subscriptions
- [ ] Video consultation integration
- [ ] Email notifications
- [ ] Mobile app integration
- [ ] Advanced health analytics
- [ ] AI-powered health recommendations
- [ ] Social features (community forum)
- [ ] Multi-language support

## 📱 Responsive Design

The portal is fully responsive across all devices:
- **Desktop**: Full sidebar navigation, optimal spacing
- **Tablet**: Collapsible sidebar, touch-optimized
- **Mobile**: Hamburger menu, stacked layouts, swipeable sections

## 🎨 Design System

### Colors
- Primary: Emerald/Teal (brand colors)
- Success: Green (for positive actions)
- Warning: Amber/Orange (for alerts)
- Error: Red (for errors/deletions)
- Info: Blue (for informational content)
- Neutral: Gray scales

### Typography
- Headings: Bold, clear hierarchy
- Body: Regular weight, readable sizing
- Emphasis: Semibold for important information

### Components
- Cards with shadow and rounded corners
- Buttons with hover states and transitions
- Forms with focus states
- Badges for status indicators
- Progress bars for goals and loading
- Icons from Lucide React

## 📄 License

This portal system is part of the RHP Therapy e-commerce platform.

---

**Built with ❤️ for RHP Therapy customers in Ghana**
