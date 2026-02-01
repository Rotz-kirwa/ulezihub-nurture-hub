const Footer = () => {
  return (
    <footer className="py-8 bg-sage-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>
            <span className="font-serif font-semibold">Tujifunze Ulezi</span>
            <span className="text-xs text-primary-foreground/60">NURTURE HUB</span>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Nurture HUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
