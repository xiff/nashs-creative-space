import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
  const works = [
    { title: "10 ANS", image: work10Ans, bg: "bg-pink-200" },
    { title: "125 ANS", image: work125Ans, bg: "bg-red-400" },
    { title: "BIG HUT", image: workBighut, bg: "bg-lime-200" },
    { title: "N-BOAT", image: workBoat, bg: "bg-teal-400" },
    { title: "CABINE", image: workCabine, bg: "bg-violet-200" },
    { title: "CARA", image: workCara, bg: "bg-stone-300" },
    { title: "CARISTREAM", image: workCaristream, bg: "bg-slate-700" },
    { title: "COMICS", image: workComics, bg: "bg-teal-400" },
    { title: "COUCOU", image: workCoucou, bg: "bg-amber-600" },
    { title: "FÊTE DE LA TOMATE", image: workFdlt, bg: "bg-teal-600" },
    { title: "FORT RABBIT", image: workFortRabbit, bg: "bg-amber-100" },
    { title: "INSOMNI'HACK", image: workInsomniHack, bg: "bg-red-700" },
    { title: "HORSE", image: workHorse, bg: "bg-stone-400" },
    { title: "LE CONTRETEMPS", image: workLeContretemps, bg: "bg-teal-400" },
    { title: "LOGOS", image: workLogos1, bg: "bg-gray-100" },
    { title: "MUZICOS", image: workMuzicos, bg: "bg-violet-500" },
    { title: "LOGOS 2", image: workLogos2, bg: "bg-gray-100" },
    { title: "PAIHEME", image: workPaiheme, bg: "bg-teal-400" },
    { title: "PENBANK", image: workPenbank, bg: "bg-pink-400" },
    { title: "SLAW", image: workSlaw, bg: "bg-teal-600" },
    { title: "TONNEAU JOYEUX", image: workTonneauJoyeux, bg: "bg-yellow-400" },
    { title: "KWAIIPUNK", image: workKwaiipunk, bg: "bg-blue-300" },
    { title: "TM", image: workTm, bg: "bg-zinc-700" },
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {works.map((work, index) => (
            <div
              key={work.title}
              className={`break-inside-avoid group relative rounded-lg ${work.bg} overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer p-2`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto rounded-md shadow-lg"
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
    </section>
  );
};

export default Work;
