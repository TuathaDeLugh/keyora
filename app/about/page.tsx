import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us | Keyora",
  description: "Learn more about Keyora and our mission",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">About Keyora</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Welcome to Keyora, your premier destination for quality products
              and exceptional shopping experiences.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Our Mission</h2>
            <p>
              At Keyora, we're committed to providing our customers with the
              finest selection of products, backed by outstanding customer
              service and competitive prices. We believe shopping should be
              enjoyable, convenient, and rewarding.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">What We Offer</h2>
            <ul className="space-y-2">
              <li>Curated selection of premium products</li>
              <li>Fast and reliable shipping</li>
              <li>30-day hassle-free returns</li>
              <li>Secure payment processing</li>
              <li>Dedicated customer support</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Our Values</h2>
            <p>
              Quality, integrity, and customer satisfaction are at the heart of
              everything we do. We carefully select each product in our catalog
              to ensure it meets our high standards.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
