import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/shopifyStorefront";

export const metadata: Metadata = {
  title: "Products | Keyora",
  description: "Browse our complete collection of premium products",
};

// Mock data - replace with actual Shopify data
const products = [
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
  {
    id: "5",
    title: "Wireless Earbuds",
    handle: "wireless-earbuds",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
  },
  {
    id: "6",
    title: "Laptop Sleeve",
    handle: "laptop-sleeve",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
  },
];

export default async function ProductsPage() {
  // Uncomment when Shopify is configured:
  // const products = await getProducts(50);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Products
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our complete collection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
