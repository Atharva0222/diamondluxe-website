import { TextAnimation } from "@/components/ui/text-reveal";

export default function CraftsmanshipSection() {
  const qualityPoints = [
    {
      title: "Master Artisans",
      description: "Each piece is crafted by skilled artisans with decades of experience"
    },
    {
      title: "Ethical Sourcing", 
      description: "Responsibly sourced diamonds and precious metals from trusted suppliers"
    },
    {
      title: "Timeless Design",
      description: "Contemporary elegance that transcends fleeting trends"
    },
    {
      title: "Lifetime Quality",
      description: "Meticulously finished to last generations with proper care"
    }
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <TextAnimation variant="slideInLeft">
                <div className="w-12 h-px bg-primary"></div>
              </TextAnimation>
              <TextAnimation variant="slideInLeft" delay={0.2}>
                <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Crafted with
                  <span className="text-primary block">Precision</span>
                </h2>
              </TextAnimation>
              <TextAnimation variant="slideInLeft" delay={0.4}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  For over three decades, our master jewelers have combined traditional techniques with contemporary vision to create extraordinary pieces that celebrate life's most precious moments.
                </p>
              </TextAnimation>
            </div>

            <div className="space-y-6">
              <TextAnimation variant="slideInLeft" delay={0.6}>
                <p className="text-foreground leading-relaxed">
                  Every diamond is hand-selected for its exceptional brilliance and fire. Each setting is meticulously crafted to enhance the natural beauty of the stones, ensuring that your jewelry becomes a cherished heirloom that tells your unique story for generations to come.
                </p>
              </TextAnimation>
              
              <TextAnimation variant="fadeIn" delay={0.8}>
                <div className="w-full h-px bg-border"></div>
              </TextAnimation>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {qualityPoints.map((point, index) => (
                  <TextAnimation key={index} variant="slideUp" delay={1.0 + (index * 0.1)}>
                    <div className="space-y-2">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {point.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </TextAnimation>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <TextAnimation variant="slideUp" delay={0.3}>
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-1 rounded-lg border border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-2/50 via-transparent to-primary/5"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-primary/20 rounded-full"></div>
                <div className="absolute bottom-12 right-12 w-16 h-16 bg-primary/10 rounded-lg rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent/20 rounded-full"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 px-8">
                    <div className="w-20 h-20 mx-auto border-2 border-primary/30 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-primary uppercase tracking-wider">
                        Heritage Since 1990
                      </p>
                      <p className="text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
                        Three decades of uncompromising excellence in jewelry craftsmanship
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Certified Quality</p>
                    <p className="text-xs text-muted-foreground">GIA Approved</p>
                  </div>
                </div>
              </div>
            </div>
          </TextAnimation>
        </div>
      </div>
    </section>
  );
}