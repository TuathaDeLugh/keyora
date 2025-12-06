"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import { toast } from "sonner";
import { Minus, Plus, ShoppingCart } from "lucide-react";

// Mock product data - replace with actual Shopify data
const product = {
  id: "1",
  title: "Premium Wireless Headphones",
  handle: "premium-headphones",
  description:
    "Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.",
  price: 299.99,
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1200&q=80",
  ],
  variants: [
    { id: "v1", title: "Black", availableForSale: true },
    { id: "v2", title: "White", availableForSale: true },
    { id: "v3", title: "Silver", availableForSale: false },
  ],
};

export default function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      variantId: product.variants[selectedVariant].id,
      title: `${product.title} - ${product.variants[selectedVariant].title}`,
      price: product.price,
      quantity,
      image: product.images[0],
      handle: product.handle,
    });
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-lg border">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? "border-[hsl(var(--primary))]"
                        : "border-transparent hover:border-muted"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                <p className="text-3xl font-bold text-[hsl(var(--primary))]">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Color
                </label>
                <div className="flex gap-2">
                  {product.variants.map((variant, index) => (
                    <Button
                      key={variant.id}
                      variant={
                        selectedVariant === index ? "default" : "outline"
                      }
                      onClick={() => setSelectedVariant(index)}
                      disabled={!variant.availableForSale}
                      className={
                        selectedVariant === index
                          ? "bg-[hsl(var(--primary))]"
                          : ""
                      }
                    >
                      {variant.title}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--brand))] text-lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              {/* Features */}
              <div className="border-t pt-6 space-y-2">
                <h3 className="font-semibold mb-3">Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Active Noise Cancellation</li>
                  <li>✓ 30-hour Battery Life</li>
                  <li>✓ Premium Comfort Padding</li>
                  <li>✓ Bluetooth 5.0</li>
                  <li>✓ Fast Charging Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
