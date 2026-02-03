import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <div>
              <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                Jifunze Ulezi HUb
              </span>
              <span className="block text-xs text-coral font-medium tracking-wider">
                NURTURE HUB
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/book"
              className="btn-primary"
            >
              Book a Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div 
              className="md:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Slide-in Menu */}
            <div className="md:hidden fixed right-0 top-0 h-full w-64 bg-card shadow-2xl z-50 animate-slide-in-right">
              <div className="p-4">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-auto p-2 text-foreground flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
                
                {/* Menu Items */}
                <div className="flex flex-col gap-4 mt-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 px-3 hover:bg-sage-light rounded-lg"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="/book"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary text-center mt-2"
                  >
                    Book a Session
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
