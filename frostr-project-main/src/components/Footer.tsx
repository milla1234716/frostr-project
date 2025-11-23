import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold mb-1">Boriif Technologies LLC</p>
            <p className="text-primary-foreground/70">Minneapolis, Minnesota</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Boriif Technologies LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
