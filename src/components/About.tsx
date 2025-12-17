const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-12 text-center">
            <span className="text-gradient">About</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis <span className="text-foreground font-medium">Nash</span>, graphiste indépendant depuis plus de quinze ans. Mon parcours a commencé dans le graffiti, la peinture et le street art, avant de s'ouvrir à la réalisation publicitaire puis au design graphique. Aujourd'hui, je crée des images pour des marques, des entreprises et le secteur culturel.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon univers puise dans la subculture, le folklore et les traditions du monde, leurs symboliques, mais aussi dans l'architecture pour sa rigueur et ses structures, et dans la nature, source infinie de formes organiques. Chaque création est pensée comme un ensemble vivant, où chaque détail a sa place et son histoire. J'accorde une attention particulière à la composition, à la lisibilité et à l'équilibre des formes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bien que je suive l'évolution des technologies, les œuvres présentées ici sont réalisées sans recours à l'intelligence générative. Je tiens à proposer un travail authentique, personnel et singulier.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque projet est conçu dans une logique de collaboration : écouter, comprendre et façonner des images qui reflètent votre identité et captent l'attention. Mon objectif est de créer des visuels qui racontent votre histoire et renforcent votre identité.
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

          {/* Stats or highlights */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient mb-2">∞</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Creativity</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Passion</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient mb-2">100%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
