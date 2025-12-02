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
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-3xl tracking-wider text-gradient">
          NASH
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#work"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Work
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
