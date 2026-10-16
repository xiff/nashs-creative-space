import { useState } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import boat from "@/assets/hero/boat.webp";
import comics from "@/assets/hero/comics.webp";
import kawaiipunk from "@/assets/hero/kwaiipunk.webp";
import rabbit from "@/assets/hero/fort-rabbit.webp";
import anniversary from "@/assets/hero/10-ans.webp";
import caristream from "@/assets/hero/caristream.webp";
import tomato from "@/assets/hero/fdlt.webp";
import bighut from "@/assets/hero/bighut.webp";
import penbank from "@/assets/hero/penbank.webp";

const rows = [[boat, comics, kawaiipunk, anniversary], [rabbit, caristream, tomato, penbank], [bighut, kawaiipunk, boat, comics]];

const Hero = () => {
  const [paused, setPaused] = useState(false);
  return (
    <section id="hero" className="art-hero relative isolate overflow-hidden flex items-center justify-center">
      <div className={`poster-wall ${paused ? "is-paused" : ""}`} aria-hidden="true">
        {rows.map((row, index) => (
          <div className="poster-row" key={index}>
            <div className="poster-track">
              {[0, 1].map((copy) => <div className="poster-set" key={copy}>
                {row.map((image, position) => <img key={`${copy}-${position}`} src={image} alt="" width="360" height="457" decoding="async" loading={index === 0 && position < 2 ? "eager" : "lazy"} />)}
              </div>)}
            </div>
          </div>
        ))}
      </div>
      <div className="hero-veil absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-name font-display text-primary leading-none">NASH</h1>
          <p className="text-xl md:text-2xl text-foreground font-semibold mb-3">Nicolas Ryffel — Graphiste à Lausanne</p>
          <p className="text-lg md:text-2xl text-foreground mb-6">Créateur d’images et d’identités</p>
          <p className="mb-5"><span className="handmade-badge inline-block text-sm font-semibold px-3 py-2">✦ 100% fait main — sans IA générative</span></p>
          <a href="mailto:nash@n45h.ch" className="text-base text-foreground underline decoration-primary underline-offset-4 hover:text-primary">nash@n45h.ch</a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-9">
            <Button variant="neon" size="xl" asChild><a href="#contact">Me contacter</a></Button>
            <Button variant="outline" size="xl" asChild><a href="#work">Voir les travaux <ArrowDown aria-hidden="true" /></a></Button>
          </div>
        </div>
      </div>
      <Button variant="outline" size="icon" className="marquee-control absolute bottom-5 right-5 z-20 min-h-11 min-w-11" onClick={() => setPaused(!paused)} aria-label={paused ? "Reprendre le défilement des œuvres" : "Mettre le défilement en pause"} title={paused ? "Reprendre le défilement" : "Mettre en pause"}>
        {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </Button>
    </section>
  );
};
export default Hero;
