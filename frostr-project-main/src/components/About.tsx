const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            About Boriif Technologies
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Boriif Technologies builds data-driven protective equipment to prevent heat-related injuries in high-risk environments.
            </p>
            <p>
              We rely on <strong className="text-foreground">data-driven localized cooling</strong>, beginning with the FrostR active-cooling system as the first product in a scalable safety platform.
            </p>
            <p>
              Our approach combines proven refrigeration technology with modern sensors and cloud infrastructure to deliver continuous protection where workers need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
