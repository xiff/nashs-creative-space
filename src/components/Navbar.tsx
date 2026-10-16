import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-background/90 border-b border-border"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-3xl text-primary">
          NASH
        </a>
        <div className="flex items-center gap-3 md:gap-8 text-xs md:text-base">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            À propos
          </a>
          <a
            href="#services"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#work"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Travaux
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
