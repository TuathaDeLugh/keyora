"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useCartStore } from "@/store/cart";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  title: string;
  handle: string;
  price: number;
  currencyCode?: string;
  image?: string;
  imageAlt?: string;
  index?: number;
}

export function ProductCard({
  id,
  title,
  handle,
  price,
  currencyCode = "USD",
  image,
  imageAlt,
  index = 0,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id,
      variantId: id,
      title,
      price,
      quantity: 1,
      image,
      handle,
    });
    toast.success(`${title} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link href={`/products/${handle}`}>
        <Card className="h-full overflow-hidden group cursor-pointer border-2 hover:border-[hsl(var(--primary))] transition-all duration-300">
          <CardContent className="p-0">
            <div className="relative aspect-square overflow-hidden bg-muted">
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--brand))] opacity-20">
                  <span className="text-4xl">📦</span>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4 space-y-2">
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-[hsl(var(--primary))] transition-colors">
              {title}
            </h3>
            <div className="flex items-center justify-between w-full">
              <p className="text-xl font-bold text-[hsl(var(--primary))]">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: currencyCode,
                }).format(price)}
              </p>
              <Button
                size="icon"
                onClick={handleAddToCart}
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--brand))] transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
