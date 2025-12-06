"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";

// Mock data - replace with actual Shopify data
const featuredProducts = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    handle: "premium-headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  },
  {
    id: "2",
    title: "Smart Watch Pro",
    handle: "smart-watch-pro",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    id: "3",
    title: "Designer Sunglasses",
    handle: "designer-sunglasses",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
  },
  {
    id: "4",
    title: "Leather Backpack",
    handle: "leather-backpack",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--brand))] to-[hsl(var(--secondary))] text-white">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="container mx-auto px-4 py-24 md:py-32 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">
                  New Collection Available
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Discover Your
                <br />
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Shop the latest trends with exclusive deals and premium quality
                products
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[hsl(var(--primary))] hover:bg-white/90 text-lg px-8"
                >
                  <Link href="/products">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 bg-background/10"
                >
                  <Link href="/collections">View Collections</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </section>

        {/* Features */}
        <section className="py-16 border-b">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={itemVariants}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10">
                  <Zap className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="text-xl font-semibold">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Free shipping on orders over $50
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--secondary))]/10">
                  <ShoppingBag className="h-8 w-8 text-[hsl(var(--secondary))]" />
                </div>
                <h3 className="text-xl font-semibold">Quality Products</h3>
                <p className="text-muted-foreground">
                  Curated selection of premium items
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--brand))]/10">
                  <Sparkles className="h-8 w-8 text-[hsl(var(--brand))]" />
                </div>
                <h3 className="text-xl font-semibold">Easy Returns</h3>
                <p className="text-muted-foreground">
                  30-day hassle-free return policy
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-xl text-muted-foreground">
                Discover our handpicked selection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} {...product} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" variant="outline">
                <Link href="/products">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
