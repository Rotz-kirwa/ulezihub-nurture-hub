import ShareButton from './ShareButton';

const Footer = () => {
  return (
    <footer className="py-8 bg-sage-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="mb-6 p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">⚠️</span>
              <div>
                <h3 className="font-semibold text-primary-foreground mb-2 text-sm md:text-base">Disclaimer</h3>
                <p className="text-primary-foreground/90 text-xs md:text-sm leading-relaxed">
                  Participation is voluntary. Your information will be held with utmost confidentiality. 
                  The sessions will not affect access to routine health services. We shall not offer any 
                  medicine prescription or dispensing.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer Content */}
          <div className="text-center">
            <div className="mb-2">
              <span className="text-xl">🌱</span>
            </div>
            <div className="font-serif font-semibold mb-1">
              Jifunze Ulezi HUb: Nurture HUB
            </div>
            <p className="text-primary-foreground/60 text-sm mb-4">
              © 2026 All rights reserved. Supporting mothers with love and care.
            </p>
            <div className="flex justify-center">
              <ShareButton className="bg-white/10 hover:bg-white/20 text-white border border-white/30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
