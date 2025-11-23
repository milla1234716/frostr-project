import { CheckCircle2, Circle } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      title: "Electronics & Controls",
      status: "completed",
      description: "Fully functional with BLE connectivity"
    },
    {
      title: "Cloud Data Layer",
      status: "completed",
      description: "Real-time sensor streaming to database"
    },
    {
      title: "Mobile App",
      status: "completed",
      description: "Data visualization and monitoring"
    },
    {
      title: "Mechanical Assembly",
      status: "upcoming",
      description: "Based on proven refrigeration architecture"
    },
    {
      title: "Certification",
      status: "upcoming",
      description: "Using pre-certified components"
    },
    {
      title: "Pilot Programs",
      status: "upcoming",
      description: "Industrial partner validation"
    }
  ];

  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Where FrostR Is Today
          </h2>
          <p className="text-xl text-center text-secondary-foreground/80 mb-16">
            A proven technology stack ready for field deployment
          </p>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {milestone.status === 'completed' ? (
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  ) : (
                    <Circle className="h-6 w-6 text-secondary-foreground/40" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-secondary-foreground/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
