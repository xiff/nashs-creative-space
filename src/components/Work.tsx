import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";

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
    { title: "KWAIIPUNK", image: workKwaiipunk },
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
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {works.map((work, index) => (
            <div
              key={work.title}
              className="break-inside-avoid group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
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
              Visit the Shop
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-md border-none">
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-50 p-3 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            {selectedIndex !== null && (
              <div className="flex flex-col items-center p-8">
                <img
                  src={works[selectedIndex].image}
                  alt={works[selectedIndex].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <p className="mt-4 text-xl font-display text-foreground">
                  {works[selectedIndex].title}
                </p>
              </div>
            )}

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 p-3 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Work;
