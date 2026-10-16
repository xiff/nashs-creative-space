import { ArrowUpRight, Fingerprint, Image, Palette, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectType } from "@/lib/project-types";

const services: { title: string; description: string; type: ProjectType; icon: typeof Palette }[] = [
  { title: "Identité visuelle & logo", description: "Une identité singulière qui reflète votre marque. Des logos et un langage visuel pensés pour rester cohérents sur vos supports.", type: "Identité visuelle / Logo", icon: Fingerprint },
  { title: "Affiches & événements", description: "Des affiches qui captent l’attention et donnent le ton. Des visuels pour faire vivre vos événements et vos projets culturels.", type: "Affiche / Événement", icon: Image },
  { title: "Illustration", description: "Des images originales qui racontent votre histoire. Un univers personnel, adapté à votre projet et à vos supports.", type: "Illustration", icon: Palette },
  { title: "Merch & produits", description: "Des créations qui prennent vie sur vos objets et produits. Des visuels conçus pour vos vêtements, éditions et collections.", type: "Merch / Produit", icon: Shirt },
];

const Services = ({ onSelectProject }: { onSelectProject: (type: ProjectType) => void }) => (
  <section id="services" className="py-20 scroll-mt-24">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-5xl md:text-7xl mb-12 text-center">
        <span className="marker-title">Ce que je crée</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, type, icon: Icon }) => (
          <article key={type} className="service-sticker bg-card p-6 flex flex-col items-start">
            <Icon className="w-7 h-7 text-primary mb-6" aria-hidden="true" />
            <h3 className="font-display text-3xl mb-4">{title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
            <Button variant="link" asChild className="mt-auto p-0 h-auto whitespace-normal text-left">
              <a href="#contact" onClick={() => onSelectProject(type)}>
                Discuter d’un projet <ArrowUpRight className="w-4 h-4 ml-2 shrink-0" aria-hidden="true" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;