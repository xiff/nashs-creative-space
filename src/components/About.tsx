import kawaiipunk from "@/assets/works/kwaiipunk.jpg";
import comics from "@/assets/works/comics.jpg";
import rabbit from "@/assets/works/fort-rabbit.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-12 text-center">
            <span className="marker-title">À propos</span>
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

            <div className="poster-collage" aria-label="Composition d’illustrations de Nash">
              <div className="pasted-poster poster-one"><img src={kawaiipunk} alt="KAWAIIPUNK, ville illustrée en bleu et blanc" loading="lazy" decoding="async" width="900" height="1143" /></div>
              <div className="pasted-poster poster-two"><img src={comics} alt="COMICS, affiche aux couleurs vives" loading="lazy" decoding="async" width="900" height="1143" /></div>
              <div className="pasted-poster poster-three"><img src={rabbit} alt="FORT RABBIT, forteresse illustrée" loading="lazy" decoding="async" width="900" height="1143" /></div>
              <span className="collage-japanese font-mono">ナッシュ</span>
              <span className="collage-signature font-display">KAWAIIPUNK</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
