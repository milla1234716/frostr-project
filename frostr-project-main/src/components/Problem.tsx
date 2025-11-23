import { AlertTriangle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-8 w-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">The Problem</h2>
          </div>
          <div className="space-y-6 text-lg text-foreground/80">
            <p className="leading-relaxed">
              Heat stress is a rapidly increasing workplace hazard in the United States.
            </p>
            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">•</span>
                <span><strong className="text-foreground">Over 980 workers</strong> have died from heat exposure in the past 30 years</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">•</span>
                <span><strong className="text-foreground">Approximately 33 million workers</strong> face high-risk heat conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">•</span>
                <span>Current cooling solutions are <strong className="text-foreground">passive, short-duration, or non-adaptive</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
