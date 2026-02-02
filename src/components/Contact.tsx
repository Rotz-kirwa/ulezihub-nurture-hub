import { Mail, Phone, Facebook } from 'lucide-react';

const contactLinks = [
  { 
    icon: Mail, 
    label: 'Email Us', 
    value: 'jifunzeulezihub@gmail.com',
    href: 'mailto:jifunzeulezihub@gmail.com', 
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    icon: Phone, 
    label: 'Call Us', 
    value: '+254 711 355 485',
    href: 'tel:+254711355485', 
    color: 'bg-green-50 hover:bg-green-100 border-green-200'
  },
  { 
    icon: Facebook, 
    label: 'Follow Us', 
    value: 'Facebook Page',
    href: 'https://www.facebook.com/profile.php?id=61587205564279', 
    color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200'
  },
];

const Contact = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-sage-light to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-5xl mb-4 block">💬</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
              We're here to support you on your maternal health journey. Reach out through any of these channels.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${link.color} animate-fade-in hidden md:flex flex-col items-center text-center space-y-3`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-4 bg-white rounded-full shadow-soft group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {link.label}
                  </h3>
                  <p className="text-sm text-foreground/70 font-medium">
                    {link.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Mobile Compact Contact Bar */}
          <div className="md:hidden bg-card p-4 rounded-2xl shadow-soft mb-12 animate-fade-in">
            <div className="space-y-3">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-2 hover:bg-sage-light rounded-lg transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-foreground">
                        {link.label}
                      </h3>
                      <p className="text-xs text-foreground/70 truncate">
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center bg-card p-8 rounded-2xl shadow-soft animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
              Office Hours
            </h3>
            <p className="text-foreground/70 mb-2">
              Monday - Friday: 8:00 AM - 6:00 PM
            </p>
            <p className="text-foreground/70 mb-4">
              Saturday: 9:00 AM - 2:00 PM
            </p>
            <p className="text-sm text-foreground/60 italic">
              For urgent matters, please contact us via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
