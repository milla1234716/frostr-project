import { Package, HardHat, Factory, Wheat, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const industries = [
    { icon: Package, name: "Package Delivery Carriers" },
    { icon: HardHat, name: "Construction & Roofing" },
    { icon: Factory, name: "Warehousing & Manufacturing" },
    { icon: Wheat, name: "Agriculture & Outdoor Labor" },
    { icon: Siren, name: "Emergency Response" }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Who FrostR Serves
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Industries where heat stress poses the greatest risk
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors"
              >
                <div className="flex-shrink-0">
                  <industry.icon className="h-8 w-8 text-accent" />
                </div>
                <span className="font-medium text-foreground">{industry.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={scrollToContact}
            >
              Explore Pilot Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
