import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PremiumFooterProps {
  className?: string
}

export default function PremiumFooter({ className }: PremiumFooterProps) {
  const collections = [
    "Engagement Rings",
    "Wedding Bands", 
    "Diamond Earrings",
    "Necklaces",
    "Bracelets",
    "Luxury Watches"
  ]

  const customerCare = [
    "Size Guide",
    "Care Instructions", 
    "Returns & Exchanges",
    "Warranty",
    "Custom Orders",
    "Repair Services"
  ]

  const aboutUs = [
    "Our Story",
    "Craftsmanship",
    "Sustainability",
    "Careers",
    "Press",
    "Awards"
  ]

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service", 
    "Cookie Policy",
    "Accessibility"
  ]

  return (
    <footer className={`bg-background border-t border-border ${className}`}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          {/* Brand and Newsletter Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
  <div className="lg:col-span-1">
    {/* Logo instead of name */}
    <img
      src="https://cdn.discordapp.com/attachments/1013010033329586196/1408860138840002783/a0c74fc663.png?ex=68ab46c0&is=68a9f540&hm=f86f216a91c307edb0ee96b96f1491d8e8ac738bced75a3c1ece48b16f41d8a8&"
      alt="VAJRA Diamonds Logo"
      className="w-70 h-auto mb-16"  // adjust width to fit design
    />
    
    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
      Crafting timeless elegance since 1990. Each piece tells a story of exceptional 
      artistry and uncompromising quality, designed to celebrate life's most precious moments.
    </p>
              
              {/* Contact Information */}
              {/* <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 446-5842</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contact@vajradiamonds.com</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>Fifth Avenue Flagship<br />New York, NY 10022</span>
                </div>
              </div> */}
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  Join Our Exclusive Circle
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Be the first to discover new collections, receive styling inspiration, 
                  and enjoy exclusive access to private events.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    placeholder="Enter your email address"
                    className="flex-1 bg-surface-1 border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Collections */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Collections
              </h4>
              <ul className="space-y-3">
                {collections.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Customer Care
              </h4>
              <ul className="space-y-3">
                {customerCare.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                About Us
              </h4>
              <ul className="space-y-3">
                {aboutUs.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Connect
              </h4>
              <div className="flex gap-4 mb-6">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-surface-1 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-surface-1 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-surface-1 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-surface-1 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
              <div className="text-xs text-muted-foreground">
                <p className="mb-2">Showroom Hours:</p>
                <p>Mon - Sat: 10AM - 8PM</p>
                <p>Sunday: 12PM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lumière Diamonds. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <span key={link} className="flex items-center">
                  <a 
                    href="#" 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="mx-3 text-muted-foreground">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}