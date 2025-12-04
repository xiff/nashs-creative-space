import { Instagram, ShoppingBag, Twitch } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main content */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display text-6xl md:text-8xl text-violet mb-6">NASH</h2>
          
          <div className="space-y-1 mb-6">
            <p className="text-xl text-foreground font-medium">Nicolas Ryffel</p>
            <p className="text-muted-foreground">Rue Sera-Biasini 26</p>
            <p className="text-muted-foreground">1005 Lausanne</p>
          </div>

          <div className="space-y-1 mb-8">
            <a 
              href="mailto:nash@n45h.ch" 
              className="block text-foreground hover:text-primary transition-colors"
            >
              nash@n45h.ch
            </a>
            <a 
              href="tel:+41763933885" 
              className="block text-foreground hover:text-primary transition-colors"
            >
              +41 76 393 38 85
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://www.instagram.com/nash_nicolas_ryffel/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 group"
          >
            <Instagram className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
          <a
            href="https://nashshop.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 group"
          >
            <ShoppingBag className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
          <a
            href="https://www.twitch.tv/monstre_nash"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 group"
          >
            <Twitch className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nash — Nicolas Ryffel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
