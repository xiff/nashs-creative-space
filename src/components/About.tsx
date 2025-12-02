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
                I'm <span className="text-foreground font-medium">Nash</span>, a designer and digital artist passionate about merging
                contrasting worlds—blending the raw energy of cyberpunk with the
                soft charm of kawaii aesthetics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work explores the intersection of technology and emotion,
                creating visuals that feel both futuristic and nostalgic. Every
                piece is crafted with attention to detail and a love for vibrant
                colors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not designing, you can find me streaming on Twitch,
                sharing my creative process and connecting with fellow artists.
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
