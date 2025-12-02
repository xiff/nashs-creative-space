const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-2xl text-gradient">NASH</div>
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
