import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Timeline from "@/components/Timeline";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Timeline />
      <Industries />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
