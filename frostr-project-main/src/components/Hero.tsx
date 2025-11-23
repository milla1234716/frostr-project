import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Advanced cooling technology"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Preventing workplace heat injuries with data-driven active cooling
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl">
            FrostR is a wearable cooling system using a compact refrigeration cycle and real-time telemetry to protect workers in extreme heat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg"
              onClick={scrollToContact}
            >
              Request Pilot Program
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg"
              onClick={scrollToContact}
            >
              Contact Boriif Technologies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
