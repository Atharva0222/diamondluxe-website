"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function DiamondHeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 h-32 w-32 rotate-45 border border-primary/20"></div>
        <div className="absolute top-3/4 right-1/3 h-20 w-20 rotate-12 border border-accent/20"></div>
        <div className="absolute bottom-1/4 left-1/2 h-16 w-16 rotate-45 border border-primary/10"></div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Premium badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface-1 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Exquisite Diamond Collection
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Timeless Brilliance
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Crafted to Perfection
            </span>
          </h1>

          {/* Premium subtitle */}
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground sm:text-2xl lg:text-xl">
            Discover our exclusive collection of premium diamonds, meticulously selected 
            and expertly crafted to create jewelry that transcends time. Each piece 
            represents the pinnacle of luxury and uncompromising quality.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent/50 bg-transparent px-8 py-4 text-lg font-semibold text-accent hover:bg-accent/10 hover:border-accent hover:text-accent hover:scale-105 transition-all"
            >
              Book Consultation
            </Button>
          </div>

          {/* Luxury features */}
          <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div className="group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <div className="h-6 w-6 rounded-full bg-primary/80"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Certified Quality</h3>
              <p className="text-sm text-muted-foreground">GIA certified diamonds with exceptional clarity</p>
            </div>
            
            <div className="group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                <div className="h-6 w-6 rounded-full bg-accent/80"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Master Craftsmanship</h3>
              <p className="text-sm text-muted-foreground">Handcrafted by skilled artisans with decades of experience</p>
            </div>
            
            <div className="group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <div className="h-6 w-6 rounded-full bg-primary/60"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Lifetime Guarantee</h3>
              <p className="text-sm text-muted-foreground">Comprehensive warranty and expert maintenance service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}