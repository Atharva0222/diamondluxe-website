"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, ShoppingCart } from "lucide-react";
import { TextAnimation } from "@/components/ui/text-reveal";

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
    price: 1500,
    image:
      "https://www.growthsphereindustries.com/vajra-diamond-website-assets/sign-piece/sign-ring.png",
  },
  {
    id: "2",
    name: "Aurora Necklace",
    description: "Graduated diamond tennis necklace in 18k gold",
    price: 2820,
    image:
      "https://www.growthsphereindustries.com/vajra-diamond-website-assets/sign-piece/sign-necklace.png",
  },
  {
    id: "3",
    name: "Celestial Earrings",
    description: "1.5ct each diamond drop earrings",
    price: 1450,
    image:
      "https://www.growthsphereindustries.com/vajra-diamond-website-assets/sign-piece/sign-earing.png",
  },
  {
    id: "4",
    name: "Infinity Bracelet",
    description: "Diamond infinity link bracelet in white gold",
    price: 3840,
    image:
      "https://www.growthsphereindustries.com/vajra-diamond-website-assets/sign-piece/sign-bracelets.png",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
};

export default function SignatureProducts() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <TextAnimation variant="slideUp">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Signature Pieces
            </h2>
          </TextAnimation>
          <TextAnimation variant="slideUp" delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most coveted diamond jewelry pieces, each crafted
              with exceptional artistry and timeless elegance.
            </p>
          </TextAnimation>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureProducts.map((product, index) => (
            <TextAnimation
              key={product.id}
              variant="slideUp"
              delay={0.1 * index}
            >
              <Card className="bg-card border-border hover:border-primary/20 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square bg-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-2xl font-heading font-bold text-accent">
                      {formatPrice(product.price)}
                    </div>

                    <div className="text-xs text-muted-foreground uppercase tracking-wide"></div>
                  </div>
                </div>
              </Card>
            </TextAnimation>
          ))}
        </div>

        {/* View All Button */}
        <TextAnimation variant="slideUp" delay={0.6}>
          <div className="text-center mt-12">
            {/* <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary hover:text-primary transition-colors duration-200"
            >
              View All Collection
            </Button> */}
          </div>
        </TextAnimation>
      </div>
    </section>
  );
}
