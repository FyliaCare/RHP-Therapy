# RHP Therapy - Modern E-Commerce Website

A professional, dynamic e-commerce website for RHP Therapy (Royal Home of Phytotherapy) built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## 🌿 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations using Framer Motion
- **E-Commerce Functionality**: 
  - Product catalog with filtering and search
  - Shopping cart with persistent state (Zustand)
  - Secure checkout process
  - Order management
- **Content Management**: Dynamic blog/articles section for wellness content
- **Database**: PostgreSQL with Prisma ORM
- **Payment Integration**: Stripe payment gateway (ready for configuration)
- **SEO Optimized**: Metadata and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL with Prisma
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Payments**: Stripe (integration ready)

## 📦 Quick Start

1. **Install dependencies**:
```bash
npm install
```

2. **Set up your database**:
Update the `.env` file with your PostgreSQL database connection.

3. **Run Prisma migrations**:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

4. **Start the development server**:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 🎨 Key Pages

- **Homepage** (`/`): Hero, features, featured products, mission, testimonials, newsletter
- **Shop** (`/shop`): Product catalog with filters and search
- **Cart** (`/cart`): Shopping cart management
- **Checkout** (`/checkout`): Secure checkout flow
- **About** (`/about`): Company information and values
- **Articles** (`/articles`): Blog and wellness content
- **Contact** (`/contact`): Contact form and information

## 📝 Configuration

See `.env` file for required environment variables (database, Stripe, authentication, etc.).

---

Built with ❤️ for natural wellness and healing.
