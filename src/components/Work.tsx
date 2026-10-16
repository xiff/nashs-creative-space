import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import work10Ans from "@/assets/works/10-ans.jpg";
import work125Ans from "@/assets/works/125-ans.jpg";
import workBighut from "@/assets/works/bighut.jpg";
import workBoat from "@/assets/works/boat.jpg";
import workCabine from "@/assets/works/cabine.jpg";
import workCara from "@/assets/works/cara.jpg";
import workCaristream from "@/assets/works/caristream.jpg";
import workComics from "@/assets/works/comics.jpg";
import workCoucou from "@/assets/works/coucou.jpg";
import workFdlt from "@/assets/works/fdlt.jpg";
import workFortRabbit from "@/assets/works/fort-rabbit.jpg";
import workInsomniHack from "@/assets/works/insomni-hack.jpg";
import workHorse from "@/assets/works/horse.jpg";
import workLeContretemps from "@/assets/works/le-contretemps.jpg";
import workLogos1 from "@/assets/works/logos-1.jpg";
import workMuzicos from "@/assets/works/muzicos.jpg";
import workLogos2 from "@/assets/works/logos-2.jpg";
import workPaiheme from "@/assets/works/paiheme.jpg";
import workPenbank from "@/assets/works/penbank.jpg";
import workSlaw from "@/assets/works/slaw.jpg";
import workTonneauJoyeux from "@/assets/works/tonneau-joyeux.jpg";
import workKwaiipunk from "@/assets/works/kwaiipunk.jpg";
import workTm from "@/assets/works/tm.jpg";

const Work = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const works = [
    { title: "10 ANS", image: work10Ans },
    { title: "125 ANS", image: work125Ans },
    { title: "BIG HUT", image: workBighut },
    { title: "N-BOAT", image: workBoat },
    { title: "CABINE", image: workCabine },
    { title: "CARA", image: workCara },
    { title: "CARISTREAM", image: workCaristream },
    { title: "COMICS", image: workComics },
    { title: "COUCOU", image: workCoucou },
    { title: "FÊTE DE LA TOMATE", image: workFdlt },
    { title: "FORT RABBIT", image: workFortRabbit },
    { title: "INSOMNI'HACK", image: workInsomniHack },
    { title: "HORSE", image: workHorse },
    { title: "LE CONTRETEMPS", image: workLeContretemps },
    { title: "LOGOS", image: workLogos1 },
    { title: "MUZICOS", image: workMuzicos },
    { title: "LOGOS 2", image: workLogos2 },
    { title: "PAIHEME", image: workPaiheme },
    { title: "PENBANK", image: workPenbank },
    { title: "SLAW", image: workSlaw },
    { title: "TONNEAU JOYEUX", image: workTonneauJoyeux },
    { title: "KAWAIIPUNK", image: workKwaiipunk },
    { title: "TM", image: workTm },
  ];

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? works.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === works.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="work" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl md:text-7xl mb-4 text-center">
          <span className="marker-title">Travaux</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Une sélection de projets pour des marques, des entreprises et le secteur culturel.
        </p>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {works.map((work, index) => (
            <Button
              key={work.title}
              variant="artwork"
              className="gallery-item break-inside-avoid group relative"
              aria-label={`Agrandir ${work.title}`}
              aria-describedby={`work-caption-${index}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto"
                decoding="async"
                loading="lazy"
              />
              <span className="gallery-caption" id={`work-caption-${index}`}>
                <span className="font-display text-xl md:text-2xl block">{work.title}</span>
                <span className="text-xs block">Cliquer pour agrandir</span>
              </span>
            </Button>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="neon" size="lg" asChild>
            <a
              href="https://nashshop.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Voir la boutique
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
        <DialogContent className="lightbox max-w-[95vw] md:max-w-[90vw] p-3 md:p-6 bg-background border-2 border-foreground" onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); handlePrev(); }
          if (event.key === "ArrowRight") { event.preventDefault(); handleNext(); }
        }}>
          {selectedIndex !== null && <>
            <DialogTitle className="sr-only">{works[selectedIndex].title}</DialogTitle>
            <DialogDescription className="sr-only">Œuvre de Nash agrandie.</DialogDescription>
            <img src={works[selectedIndex].image} alt={works[selectedIndex].title} className="lightbox-image w-full object-contain" />
            <div className="flex items-center justify-between gap-3 pt-2">
              <Button variant="outline" size="icon" className="min-h-11 min-w-11" onClick={handlePrev} aria-label="Œuvre précédente" title="Œuvre précédente"><ChevronLeft aria-hidden="true" /></Button>
              <p className="text-center font-display text-xl md:text-2xl">{works[selectedIndex].title}<span className="block font-body text-xs text-muted-foreground">{selectedIndex + 1} / {works.length}</span></p>
              <Button variant="outline" size="icon" className="min-h-11 min-w-11" onClick={handleNext} aria-label="Œuvre suivante" title="Œuvre suivante"><ChevronRight aria-hidden="true" /></Button>
            </div>
          </>}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Work;
