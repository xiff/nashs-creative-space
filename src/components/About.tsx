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
                J'ai exploré le graffiti, la peinture et le street art avant de me tourner vers la réalisation publicitaire, puis vers le design graphique, que j'exerce en tant qu'indépendant depuis plus de <span className="text-foreground font-medium">15 ans</span>. Un quotidien au service de marques, d'entreprises ou de la culture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aujourd'hui, je me concentre sur la création d'images influencées par la subculture, le folklore et les traditions du monde, l'architecture pour sa rigueur et ses structures, ainsi que la nature, source inépuisable de formes organiques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Un soin particulier est apporté à la composition, à la lisibilité, à la cohérence et à l'équilibre des formes. Chaque image est pensée comme un ensemble vivant, où chaque élément a sa place et son histoire.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Toutes mes œuvres sont conçues sans recours à l'intelligence générative, pour un travail authentique, personnel et singulier. Je réalise la quasi-totalité de mes illustrations en direct sur <span className="text-foreground font-medium">Twitch</span>.
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
