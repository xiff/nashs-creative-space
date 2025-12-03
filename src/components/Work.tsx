import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Work = () => {
  const works = [
    { title: "22 ANS", bg: "bg-gradient-to-br from-orange-200 to-orange-300", span: "row-span-2" },
    { title: "PENKINKS PINK", bg: "bg-gradient-to-br from-pink-200 to-pink-300", span: "" },
    { title: "LE CONTRETEMPS", bg: "bg-gradient-to-br from-teal-300 to-teal-400", span: "" },
    { title: "KAWAII CITY", bg: "bg-gradient-to-br from-amber-100 to-amber-200", span: "row-span-2" },
    { title: "CARISTREAM", bg: "bg-gradient-to-br from-slate-700 to-slate-800", span: "" },
    { title: "24", bg: "bg-gradient-to-br from-stone-200 to-stone-300", span: "" },
    { title: "10 ANS", bg: "bg-gradient-to-br from-pink-300 to-pink-400", span: "" },
    { title: "HOT DOGS", bg: "bg-gradient-to-br from-lime-200 to-lime-300", span: "" },
    { title: "MUZICOS", bg: "bg-gradient-to-br from-violet-400 to-violet-500", span: "" },
    { title: "MASK", bg: "bg-gradient-to-br from-gray-800 to-gray-900", span: "" },
    { title: "HOUSE STACK", bg: "bg-gradient-to-br from-amber-200 to-amber-300", span: "row-span-2" },
    { title: "TONNEAU JOYEUX", bg: "bg-gradient-to-br from-yellow-400 to-yellow-500", span: "" },
    { title: "LOGOS", bg: "bg-white", span: "row-span-2" },
    { title: "POTATO", bg: "bg-gradient-to-br from-teal-400 to-teal-500", span: "" },
    { title: "CHASSE AUX OEUFS", bg: "bg-gradient-to-br from-amber-300 to-amber-400", span: "" },
    { title: "CRYSTAL TOWER", bg: "bg-gradient-to-br from-indigo-800 to-indigo-900", span: "" },
    { title: "FÊTE TOMATE", bg: "bg-gradient-to-br from-orange-300 to-orange-400", span: "" },
    { title: "SUKERUYO", bg: "bg-gradient-to-br from-purple-300 to-purple-400", span: "" },
    { title: "MASK SPIRIT", bg: "bg-gradient-to-br from-green-300 to-green-400", span: "" },
    { title: "SKULL", bg: "bg-gradient-to-br from-red-800 to-red-900", span: "" },
    { title: "N-BOAT", bg: "bg-gradient-to-br from-pink-200 to-pink-300", span: "" },
    { title: "BLUEPRINT", bg: "bg-gradient-to-br from-blue-400 to-blue-500", span: "col-span-2" },
    { title: "STRONG WOMAN", bg: "bg-gradient-to-br from-teal-200 to-teal-300", span: "" },
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {works.map((work, index) => (
            <div
              key={work.title}
              className={`break-inside-avoid group relative rounded-lg ${work.bg} overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer`}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                aspectRatio: work.span?.includes('row-span-2') ? '3/4' : work.span?.includes('col-span-2') ? '2/1' : '4/3'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="font-display text-2xl md:text-3xl text-foreground/20 group-hover:text-foreground/40 transition-colors duration-300 text-center leading-tight">
                  {work.title}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
