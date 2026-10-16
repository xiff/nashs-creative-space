import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-8xl md:text-[12rem] leading-none mb-6 animate-slide-up">
            <span className="text-violet glow-text">NASH</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-medium mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Nicolas Ryffel
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Créateur d'images et d'identités
          </p>
          <p className="text-sm text-muted-foreground mb-4 animate-slide-up">
            <span className="inline-block rounded-md border border-border bg-card px-3 py-1.5">✦ 100% fait main — sans IA générative</span>
          </p>
          <a 
            href="mailto:nash@n45h.ch" 
            className="text-lg text-muted-foreground hover:text-primary transition-colors animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            nash@n45h.ch
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="neon" size="xl" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#work">Voir les travaux</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
