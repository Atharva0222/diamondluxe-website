import { Star, Quote } from "lucide-react"
import { TextAnimation } from "@/components/ui/text-reveal";

interface Testimonial {
  id: string
  content: string
  author: string
  location: string
  occasion: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "The craftsmanship is absolutely exquisite. Every detail of my engagement ring exceeded my expectations. The team understood exactly what I envisioned and brought it to life with such precision and care.",
    author: "Sarah Chen",
    location: "New York, NY",
    occasion: "Engagement Ring",
    rating: 5
  },
  {
    id: "2", 
    content: "From the initial consultation to the final piece, the experience was flawless. The attention to detail and quality of materials is unmatched. This anniversary necklace will be treasured for generations.",
    author: "Michael Rodriguez",
    location: "Los Angeles, CA", 
    occasion: "Anniversary Gift",
    rating: 5
  },
  {
    id: "3",
    content: "I've never owned jewelry this beautiful. The design is both timeless and modern, and the quality speaks for itself. The team made the entire process seamless and enjoyable.",
    author: "Emma Thompson",
    location: "Chicago, IL",
    occasion: "Personal Collection",
    rating: 5
  }
]

interface TestimonialsSectionProps {
  className?: string
}

export default function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <section className={`py-24 bg-background ${className || ''}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextAnimation variant="slideUp">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
              What Our Customers Say
            </h2>
          </TextAnimation>
          <TextAnimation variant="slideUp" delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover why discerning customers trust us with their most precious moments
            </p>
          </TextAnimation>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TextAnimation key={testimonial.id} variant="slideUp" delay={0.1 * index}>
              <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-primary rounded-full p-3 shadow-lg">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6 pt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 text-base">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-border pt-6">
                  <div className="flex flex-col">
                    <cite className="not-italic font-semibold text-foreground text-lg mb-1">
                      {testimonial.author}
                    </cite>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span>{testimonial.location}</span>
                      <span className="text-accent font-medium">{testimonial.occasion}</span>
                    </div>
                  </div>
                </div>

                {/* Subtle hover effect accent */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </TextAnimation>
          ))}
        </div>

        {/* Bottom CTA */}
        <TextAnimation variant="slideUp" delay={0.5}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Ready to create your own treasured piece?
            </p>
            <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
              <span>Start Your Custom Design</span>
              <div className="w-px h-4 bg-border" />
              <span className="text-sm text-muted-foreground">Schedule Consultation</span>
            </div>
          </div>
        </TextAnimation>
      </div>
    </section>
  )
}