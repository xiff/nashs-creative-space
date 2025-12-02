import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Work = () => {
  const works = [
    {
      title: "KAWAIIPUNK",
      description: "Fine art poster collection blending cyberpunk and kawaii aesthetics",
      tag: "Posters",
    },
    {
      title: "N-BOAT",
      description: "Digital illustration exploring maritime themes with a neon twist",
      tag: "Illustration",
    },
    {
      title: "ARAZACAT",
      description: "Character design featuring vibrant colors and detailed line work",
      tag: "Characters",
    },
  ];

  return (
    <section id="work" className="py-32 bg-gradient-card relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-4 text-center">
            <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            A selection of my recent projects and art pieces available in the shop
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {works.map((work, index) => (
              <div
                key={work.title}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-background relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl text-foreground/5 group-hover:text-foreground/10 transition-colors duration-500">
                      {work.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      {work.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2 text-foreground group-hover:text-gradient transition-all duration-300">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="neon" size="lg" asChild>
              <a
                href="https://nashshop.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit the Shop
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
