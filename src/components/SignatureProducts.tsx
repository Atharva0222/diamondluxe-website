"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const signatureProducts: Product[] = [
  {
    id: "1",
    name: "Eternal Brilliance Ring",
    description: "2.5ct solitaire diamond with platinum band",
    price: 12500,
    image: "/api/placeholder/400/400"
  },
  {
    id: "2",
    name: "Aurora Necklace",
    description: "Graduated diamond tennis necklace in 18k gold",
    price: 8950,
    image: "/api/placeholder/400/400"
  },
  {
    id: "3",
    name: "Celestial Earrings",
    description: "1.5ct each diamond drop earrings",
    price: 6750,
    image: "/api/placeholder/400/400"
  },
  {
    id: "4",
    name: "Infinity Bracelet",
    description: "Diamond infinity link bracelet in white gold",
    price: 4200,
    image: "/api/placeholder/400/400"
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
};

export default function SignatureProducts() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Signature Pieces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most coveted diamond jewelry pieces, each crafted with exceptional artistry and timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-card border-border hover:border-primary/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden bg-surface-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-card/90 hover:bg-card text-card-foreground border-border/50"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary/90 hover:bg-primary text-primary-foreground"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-heading font-bold text-accent">
                    {formatPrice(product.price)}
                  </div>
                  
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    Premium
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:border-primary hover:text-primary transition-colors duration-200"
          >
            View All Collection
          </Button>
        </div>
      </div>
    </section>
  );
}