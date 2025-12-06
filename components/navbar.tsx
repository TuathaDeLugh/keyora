"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useCartStore } from "@/store/cart";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export function Navbar() {
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const cartItemCount = mounted ? getTotalItems() : 0;

  // Animation variants - slide from right
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--brand))] bg-clip-text text-transparent">
              Keyora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[hsl(var(--primary))]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar (Desktop) */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center space-x-2 flex-1 max-w-sm mx-6"
          >
            <div className="relative w-full">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle - Hidden on mobile */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[hsl(var(--primary))] text-[10px] font-bold text-white flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[300px]">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col space-y-6 mt-8"
                >
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <motion.div key={link.href} variants={itemVariants}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-medium transition-colors hover:text-[hsl(var(--primary))] block"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Search */}
                  <motion.div variants={sectionVariants}>
                    <form onSubmit={handleSearch} className="pt-4 border-t">
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </form>
                  </motion.div>

                  {/* Mobile Theme Toggle */}
                  <motion.div variants={sectionVariants}>
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Theme</span>
                        <ThemeToggle />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
