# 🚀 Quick Start Guide - Keyora E-commerce Platform

## Your Platform is Ready!

The Shopify e-commerce platform has been successfully built and is running at **http://localhost:3000**

---

## 📋 What You Can Do Right Now

### 1. Explore the Storefront

- **Home Page**: http://localhost:3000

  - Animated hero section
  - Featured products
  - Responsive design

- **Products**: http://localhost:3000/products

  - Browse all products
  - Click any product for details

- **Cart**: http://localhost:3000/cart

  - Add products to cart from any product page
  - Manage quantities
  - View order summary

- **Collections**: http://localhost:3000/collections

  - Browse product collections

- **Other Pages**:
  - About: http://localhost:3000/about
  - Contact: http://localhost:3000/contact

### 2. Test the Admin Panel

- **Login**: http://localhost:3000/admin/login

  - Email: `admin@keyora.com`
  - Password: `admin123`

- **Dashboard**: http://localhost:3000/admin

  - View stats and analytics
  - Recent orders
  - Top products

- **Manage Products**: http://localhost:3000/admin/products

  - View product list
  - Edit/Delete products

- **Manage Orders**: http://localhost:3000/admin/orders
  - View all orders
  - Track order status

### 3. Test Features

#### Theme Switching

- Click the sun/moon icon in the navbar
- Choose Light, Dark, or System theme
- Theme persists across page reloads

#### Shopping Cart

1. Go to any product page
2. Click "Add to Cart"
3. See toast notification
4. Cart icon shows item count
5. Go to cart to manage items

#### Responsive Design

- Resize browser window
- Test mobile menu (hamburger icon)
- All pages adapt to screen size

---

## 🔧 Next Steps to Connect Shopify

### Step 1: Create a Shopify Store

1. Go to https://www.shopify.com
2. Sign up for a store (free trial available)
3. Complete store setup

### Step 2: Get API Credentials

#### Storefront API Token

1. In Shopify Admin, go to **Settings** → **Apps and sales channels**
2. Click **Develop apps**
3. Create a new app (e.g., "Keyora Storefront")
4. Configure **Storefront API** scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_collection_listings`
5. Install the app
6. Copy the **Storefront API access token**

#### Admin API Token

1. In the same app, configure **Admin API** scopes:
   - `read_products`, `write_products`
   - `read_orders`, `write_orders`
   - `read_collections`, `write_collections`
2. Install the app
3. Copy the **Admin API access token**

### Step 3: Update Environment Variables

Create a `.env.local` file in the project root:

```env
# Your Shopify Store
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com

# API Tokens (from Step 2)
SHOPIFY_STOREFRONT_API_TOKEN=your_storefront_token_here
SHOPIFY_ADMIN_API_TOKEN=your_admin_token_here

# Admin Login (Change these!)
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-secure-password

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 4: Connect Real Data

In the page files, uncomment the Shopify API calls:

**Example: `app/products/page.tsx`**

```typescript
// Uncomment this line:
const products = await getProducts(50);

// Comment out or remove the mock data
```

### Step 5: Restart the Server

```bash
# Stop the current server (Ctrl+C)
# Start it again
npm run dev
```

---

## 🎨 Customization Guide

### Change Colors

Edit `app/globals.css`:

```css
:root {
  /* Change these values */
  --primary: 262 83% 58%; /* Purple */
  --secondary: 174 72% 56%; /* Teal */
  --brand: 221 83% 53%; /* Blue */
  --accent: 346 77% 65%; /* Coral */
}
```

### Change Font

Edit `app/layout.tsx`:

```typescript
// Replace Poppins with your preferred font
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
```

### Add More Products (Mock Data)

Edit the mock data arrays in:

- `app/page.tsx` (featured products)
- `app/products/page.tsx` (all products)

---

## 🐛 Troubleshooting

### Images Not Loading

✅ **Fixed!** - `next.config.ts` has been configured for Unsplash images

### Theme Not Switching

- Clear browser cache
- Check localStorage in DevTools
- Ensure you're clicking the theme toggle button

### Cart Not Persisting

- Check browser localStorage is enabled
- Try in a different browser
- Clear site data and try again

### Admin Login Not Working

- Check `.env.local` has correct credentials
- Default: `admin@keyora.com` / `admin123`
- Clear cookies and try again

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Try building again
npm run build
```

---

## 📚 Documentation

- **Full README**: See `README.md` for complete documentation
- **Walkthrough**: See `walkthrough.md` in artifacts for detailed implementation notes
- **Shopify Docs**: https://shopify.dev/docs

---

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## ✨ Features Overview

### Storefront

✅ Animated landing page with hero section
✅ Product catalog with search
✅ Product detail pages with variants
✅ Shopping cart with persistence
✅ Collections browsing
✅ Dark mode support
✅ Fully responsive
✅ SEO optimized

### Admin Panel

✅ Secure authentication
✅ Dashboard with analytics
✅ Product management
✅ Order management
✅ Collections management
✅ Settings page

### Technical

✅ Next.js 14 (App Router)
✅ TypeScript
✅ Tailwind CSS v4
✅ shadcn/ui components
✅ Framer Motion animations
✅ Zustand state management
✅ React Query
✅ Shopify API integration ready

---

## 🚀 Ready to Deploy?

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables
5. Deploy!

Vercel will automatically:

- Build your app
- Set up SSL
- Provide a production URL
- Enable automatic deployments

---

**Need help? Check the README.md or contact support!**

**Happy selling! 🛍️**
