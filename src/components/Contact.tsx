import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Instagram, ShoppingBag, Twitch } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { projectTypes, type ProjectType } from "@/lib/project-types";

const Contact = ({ projectType, onProjectTypeChange }: {
  projectType: ProjectType;
  onProjectTypeChange: (type: ProjectType) => void;
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Demande de projet — ${formData.name.trim()}`;
    const body = [
      `Nom : ${formData.name.trim()}`,
      `Email : ${formData.email.trim()}`,
      `Type de projet : ${projectType}`,
      "",
      "Message :",
      formData.message.trim(),
    ].join("\n");
    window.location.href = `mailto:nash@n45h.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Votre messagerie s'ouvre pour envoyer le message",
    });
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
    <section id="contact" className="py-24 md:py-32 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-4 text-center">
            <span className="marker-title">Contact</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Un projet en tête ou simplement envie de dire bonjour ? Envoyez-moi un message !
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  aria-label="Votre nom"
                  autoComplete="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-primary h-12"
                />
              </div>
              <div>
                <Input
                  name="email"
                  aria-label="Votre email"
                  autoComplete="email"
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-primary h-12"
                />
              </div>
              <div>
                <label htmlFor="project-type" className="block text-sm font-medium mb-2">Type de projet</label>
                <Select name="projectType" value={projectType} onValueChange={(value) => {
                  const selected = projectTypes.find((type) => type === value);
                  if (selected) onProjectTypeChange(selected);
                }}>
                  <SelectTrigger id="project-type" className="bg-card border-border h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  name="message"
                  aria-label="Votre message"
                  placeholder="Votre message"
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
              >
                Envoyer
                <Send className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Ou écrivez directement à <a href="mailto:nash@n45h.ch" className="text-primary hover:underline">nash@n45h.ch</a>
              </p>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl mb-4 text-foreground">
                  Restons en contact
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Que vous souhaitiez commander une création, collaborer sur un projet
                  ou simplement discuter design — je suis toujours ouvert aux nouvelles
                  connexions.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Retrouvez-moi sur
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
                    <div className="font-medium text-foreground">Boutique</div>
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
