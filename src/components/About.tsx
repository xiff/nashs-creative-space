const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-12 text-center">
            <span className="text-gradient">À propos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis <span className="text-foreground font-medium">Nash</span>, graphiste indépendant depuis plus de quinze ans. Après un parcours entre graffiti, peinture et street art, j'ai évolué vers la réalisation publicitaire puis le design graphique. Aujourd'hui, je crée des visuels pour des marques, des entreprises et le secteur culturel.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon travail s'inspire de la subculture, du folklore, de l'architecture et de la nature. Chaque image est pensée comme un ensemble vivant, avec une attention particulière à la composition, la lisibilité et l'équilibre des formes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les œuvres présentées ici sont réalisées sans recours à l'intelligence générative, pour garantir un travail authentique et singulier. Chaque projet est une collaboration : écouter, comprendre et façonner des images qui reflètent votre identité et captent l'attention.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-9xl text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
                    N
                  </span>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-sm text-muted-foreground font-mono">
                  ナッシュ
                </div>
                <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                  KAWAIIPUNK
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
