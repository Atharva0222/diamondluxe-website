import { ArrowRight, Diamond, Heart, Crown, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { TextAnimation } from "@/components/ui/text-reveal";

interface Collection {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  image: string
}

const collections: Collection[] = [
  {
    id: 'engagement-rings',
    name: 'Engagement Rings',
    description: 'Timeless symbols of eternal love, crafted with exceptional diamonds and precious metals.',
    icon: Heart,
    href: '/collections/engagement-rings',
    image: '/api/placeholder/400/500'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Elegant pieces that grace the neckline with sophisticated brilliance and refined style.',
    icon: Diamond,
    href: '/collections/necklaces',
    image: '/api/placeholder/400/500'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Exquisite designs that frame the face with luminous diamonds and precious gemstones.',
    icon: Sparkles,
    href: '/collections/earrings',
    image: '/api/placeholder/400/500'
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Luxurious wrist adornments that showcase masterful craftsmanship and enduring beauty.',
    icon: Crown,
    href: '/collections/bracelets',
    image: '/api/placeholder/400/500'
  }
]

interface FeaturedCollectionsProps {
  className?: string
}

export default function FeaturedCollections({ className }: FeaturedCollectionsProps) {
  return (
    <section className={`bg-background py-24 ${className || ''}`}>
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextAnimation variant="slideUp">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Our Collections
            </h2>
          </TextAnimation>
          <TextAnimation variant="slideUp" delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated collections of fine jewelry, each piece a testament to exceptional craftsmanship and timeless elegance.
            </p>
          </TextAnimation>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => {
            const Icon = collection.icon
            return (
              <TextAnimation key={collection.id} variant="slideUp" delay={0.1 * index}>
                <div className="group relative bg-card rounded-xl border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface-1">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {collection.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {collection.description}
                    </p>

                    {/* View Collection Link */}
                    <Link 
                      href={collection.href}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wide transition-all duration-300 group-hover:gap-3 group-hover:text-primary"
                    >
                      View Collection
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-xl" />
                  </div>
                </div>
              </TextAnimation>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <TextAnimation variant="slideUp" delay={0.6}>
          <div className="text-center mt-16">
            <Link 
              href="/collections"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium tracking-wide transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            >
              Explore All Collections
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </TextAnimation>
      </div>
    </section>
  )
}