# Keyora - Shopify E-commerce Platform

A modern, full-featured e-commerce platform built with Next.js 14, Shopify APIs, and a beautiful admin panel.

## ✨ Features

### Public Storefront

- 🎨 **Stunning Landing Page** with Framer Motion animations
- 🛍️ **Product Catalog** with search and filtering
- 🛒 **Shopping Cart** with persistent state (Zustand + localStorage)
- 🎯 **Product Details** with image gallery and variant selection
- 📦 **Collections** browsing
- 🌓 **Dark Mode** support with system preference detection
- 📱 **Fully Responsive** design
- ⚡ **SEO Optimized** with metadata for all pages

### Admin Panel

- 🔐 **Secure Authentication** with cookie-based sessions
- 📊 **Dashboard** with stats and analytics
- 📦 **Product Management** (CRUD operations)
- 📋 **Order Management** with status tracking
- 🗂️ **Collections Management**
- ⚙️ **Settings** page
- 🎭 **Page Transitions** with Framer Motion

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4 with custom color system
- **UI Components**: shadcn/ui (14 components)
- **Typography**: Poppins font family
- **State Management**:
  - Zustand (cart state)
  - React Query (server state)
- **Animations**: Framer Motion
- **Theme**: next-themes (light/dark/system)
- **E-commerce**: Shopify Storefront & Admin APIs
- **Notifications**: Sonner (toast notifications)

## 🎨 Design System

### Color Palette

- **Primary**: Vibrant Purple (`hsl(262 83% 58%)`)
- **Secondary**: Teal (`hsl(174 72% 56%)`)
- **Brand**: Deep Blue (`hsl(221 83% 53%)`)
- **Accent**: Coral (`hsl(346 77% 65%)`)

All colors have dark mode variants for optimal contrast.

### Typography

- **Font**: Poppins (weights: 300, 400, 500, 600, 700)
- **Fallback**: System fonts for performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Shopify store (for production use)

### Installation

1. **Clone the repository** (if applicable)

   ```bash
   cd keyora
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

   Update the values:

   ```env
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_API_TOKEN=your_storefront_token
   SHOPIFY_ADMIN_API_TOKEN=your_admin_token
   ADMIN_EMAIL=admin@keyora.com
   ADMIN_PASSWORD=your_secure_password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
keyora/
├── app/
│   ├── (public pages)
│   │   ├── page.tsx              # Landing page
│   │   ├── products/             # Products listing & detail
│   │   ├── collections/          # Collections
│   │   ├── cart/                 # Shopping cart
│   │   ├── about/                # About page
│   │   └── contact/              # Contact page
│   │
│   ├── admin/                    # Admin panel
│   │   ├── layout.tsx            # Admin layout with auth
│   │   ├── login/                # Admin login
│   │   ├── page.tsx              # Dashboard
│   │   ├── products/             # Product management
│   │   ├── orders/               # Order management
│   │   ├── collections/          # Collection management
│   │   └── settings/             # Settings
│   │
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
│
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── navbar.tsx                # Main navigation
│   ├── footer.tsx                # Footer
│   ├── product-card.tsx          # Product card with animations
│   ├── admin-nav.tsx             # Admin sidebar
│   ├── theme-toggle.tsx          # Theme switcher
│   ├── theme-provider.tsx        # Theme context
│   └── providers.tsx             # React Query provider
│
├── lib/
│   ├── shopifyStorefront.ts      # Shopify Storefront API
│   ├── shopifyAdmin.ts           # Shopify Admin API
│   ├── auth.ts                   # Admin authentication
│   └── utils.ts                  # Utility functions
│
├── store/
│   └── cart.ts                   # Zustand cart store
│
└── public/                       # Static assets
```

## 🔌 Shopify Integration

### Storefront API

The Storefront API is used for public-facing features:

- Fetching products and collections
- Product search
- Cart operations (future: Shopify Cart API)

### Admin API

The Admin API is used for admin panel operations:

- Product CRUD
- Order management
- Collection management

### Setting Up Shopify

1. **Create a Shopify Store**

   - Sign up at [shopify.com](https://www.shopify.com)
   - Set up your store

2. **Get Storefront API Token**

   - Go to Settings → Apps and sales channels → Develop apps
   - Create a new app
   - Configure Storefront API scopes
   - Generate access token

3. **Get Admin API Token**

   - In the same app, configure Admin API scopes
   - Generate access token

4. **Update Environment Variables**
   - Add tokens to `.env.local`

## 🎭 Animations

Framer Motion is used throughout for smooth, performant animations:

- **Landing Hero**: Fade-in, slide-up, stagger effects
- **Product Cards**: Hover scale, fade-in on mount with stagger
- **Admin Pages**: Page transitions
- **Interactive Elements**: Hover states and micro-interactions

## 🔐 Authentication

The admin panel uses a simple cookie-based authentication system:

- Login credentials are validated against environment variables
- Session stored in HTTP-only cookie (7-day expiration)
- Protected routes check authentication on mount

**For Production**: Consider upgrading to NextAuth.js, Auth0, or similar.

## 🎨 Theming

The app supports three theme modes:

- **Light**: Default light theme
- **Dark**: Dark theme with adjusted colors
- **System**: Follows OS preference

Theme is persisted in localStorage and synced across tabs.

## 📦 shadcn/ui Components Used

- Button
- Card
- Input
- Table
- Form
- Sonner (toasts)
- Dropdown Menu
- Sheet (mobile menu)
- Select
- Dialog
- Alert Dialog
- Navigation Menu
- Tabs
- Label

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Development Notes

### Mock Data

Currently, the app uses mock data for demonstration. To connect to real Shopify data:

1. Uncomment Shopify API calls in page components
2. Replace mock data with API responses
3. Handle loading and error states

### Adding New Products

Use the admin panel at `/admin/products` to manage products (requires Shopify Admin API configuration).

### Customization

- **Colors**: Update CSS variables in `app/globals.css`
- **Fonts**: Change font in `app/layout.tsx`
- **Components**: Modify shadcn/ui components in `components/ui/`

## 🐛 Troubleshooting

### Build Errors

- Ensure all environment variables are set
- Run `npm install` to ensure dependencies are up to date
- Clear `.next` folder: `rm -rf .next`

### Theme Not Working

- Check that `ThemeProvider` is properly wrapped in layout
- Verify `suppressHydrationWarning` is on `<html>` tag

### Cart Not Persisting

- Check browser localStorage is enabled
- Verify Zustand persist middleware is configured

## 📄 License

This project is for demonstration purposes. Modify as needed for your use case.

## 🤝 Contributing

This is a starter template. Feel free to customize and extend it for your needs!

## 📧 Support

For questions or issues, please contact: contact@keyora.com

---

**Built with ❤️ using Next.js 14 and Shopify**
