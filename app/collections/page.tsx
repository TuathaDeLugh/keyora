import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Collections | Keyora",
  description: "Browse our curated collections",
};

const collections = [
  {
    id: "1",
    title: "Electronics",
    handle: "electronics",
    description: "Latest tech gadgets and accessories",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
  },
  {
    id: "2",
    title: "Fashion",
    handle: "fashion",
    description: "Trendy clothing and accessories",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
  },
  {
    id: "3",
    title: "Home & Living",
    handle: "home-living",
    description: "Beautiful items for your home",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Collections</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative bg-muted">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {collection.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
