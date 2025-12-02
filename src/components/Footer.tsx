import { Instagram, ShoppingBag, Twitch } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://www.instagram.com/nash_nicolas_ryffel/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://nashshop.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <ShoppingBag className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.twitch.tv/monstre_nash"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <Twitch className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-2xl text-violet">NASH</div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nash — Nicolas Ryffel. All rights reserved.
          </p>
          <div className="text-muted-foreground text-sm">
            ナッシュ · Kawaiipunk
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
