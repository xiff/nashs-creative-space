import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Instagram, ShoppingBag, Twitch } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-4 text-center">
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-primary h-12"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-primary h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="neon"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl mb-4 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're interested in commissioning artwork, collaborating
                  on a project, or just want to chat about design—I'm always open
                  to new connections.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Find me on
                </h4>
                <a
                  href="https://www.instagram.com/nash_nicolas_ryffel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Instagram</div>
                    <div className="text-sm text-muted-foreground">@nash_nicolas_ryffel</div>
                  </div>
                </a>
                <a
                  href="https://nashshop.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Shop</div>
                    <div className="text-sm text-muted-foreground">nashshop.fr</div>
                  </div>
                </a>
                <a
                  href="https://www.twitch.tv/monstre_nash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                    <Twitch className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Twitch</div>
                    <div className="text-sm text-muted-foreground">monstre_nash</div>
                  </div>
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
