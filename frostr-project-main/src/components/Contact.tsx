import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message || !formData.inquiryType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch soon.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      inquiryType: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Interested in a pilot program or partnership? Let's talk.
          </p>
          
          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="inquiryType">Inquiry Type *</Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pilot">Pilot Program</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <a href="mailto:software@boriiftech.com" className="hover:text-accent transition-colors">
                  software@boriiftech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
