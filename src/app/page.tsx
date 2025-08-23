import PremiumNavigation from "@/components/PremiumNavigation"
import DiamondHeroSection from "@/components/DiamondHeroSection"
import FeaturedCollections from "@/components/FeaturedCollections"
import CraftsmanshipSection from "@/components/CraftsmanshipSection"
import SignatureProducts from "@/components/SignatureProducts"
import TestimonialsSection from "@/components/TestimonialsSection"
import PremiumFooter from "@/components/PremiumFooter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PremiumNavigation className="sticky top-0 z-50" />
      
      <main className="space-y-0">
        <DiamondHeroSection />
        
        <div className="border-t border-border">
          <FeaturedCollections className="bg-surface-1/30" />
        </div>
        
        <div className="border-t border-border">
          <CraftsmanshipSection />
        </div>
        
        <div className="border-t border-border bg-surface-1/20">
          <SignatureProducts />
        </div>
        
        <div className="border-t border-border">
          <TestimonialsSection />
        </div>
      </main>
      
      <PremiumFooter className="border-t border-border" />
    </div>
  )
}