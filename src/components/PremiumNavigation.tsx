"use client"

import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PremiumNavigationProps {
  className?: string
  cartItemCount?: number
}

export default function PremiumNavigation({ 
  className = "",
  cartItemCount = 0 
}: PremiumNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { label: "Collections", href: "/collections" },
    { label: "Diamonds", href: "/diamonds" },
    { label: "Custom", href: "/custom" },
    { label: "About", href: "/about" }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`bg-background border-b border-border ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="font-heading text-xl font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-200"
            >
              LUXE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium tracking-wide text-sm uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemCount > 9 ? "9+" : cartItemCount}
                </span>
              )}
              <span className="sr-only">Shopping bag</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-4 pb-6 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors duration-200 font-medium tracking-wide text-sm uppercase py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200"
                  >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Wishlist</span>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200 relative"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {cartItemCount > 9 ? "9+" : cartItemCount}
                      </span>
                    )}
                    <span className="sr-only">Shopping bag</span>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-foreground hover:text-primary hover:bg-surface-1 transition-all duration-200"
                  >
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}