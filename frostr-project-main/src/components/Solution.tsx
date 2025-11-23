import { Snowflake, Radio, HardHat } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Snowflake,
      title: "Continuous Cooling",
      description: "Compact refrigeration cycle provides active cooling across long shifts, not just short-duration passive relief."
    },
    {
      icon: Radio,
      title: "Real-Time Data",
      description: "Integrated sensors collect temperature and pressure data, streaming through BLE to mobile app and cloud platform."
    },
    {
      icon: HardHat,
      title: "Industrial Design",
      description: "Lightweight wearable form factor designed for logistics, construction, manufacturing, and outdoor labor environments."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            The FrostR System
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Active cooling technology designed for the most demanding work environments
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-lg border border-border hover:border-accent transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
