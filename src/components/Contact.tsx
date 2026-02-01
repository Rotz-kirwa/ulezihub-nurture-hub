import { Mail, Globe, Facebook, MessageCircle, FileText } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:hello@nurturehub.com', emoji: '📧' },
  { icon: Globe, label: 'Website', href: '#', emoji: '🌐' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/', emoji: '📘' },
  { icon: null, label: 'X (Twitter)', href: 'https://x.com/', emoji: '✖️' },
  { icon: MessageCircle, label: 'WhatsApp Business', href: 'https://wa.me/1234567890', emoji: '💬' },
  { icon: FileText, label: 'Policy Statement', href: '#', emoji: '📜' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-10 animate-fade-in">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mt-4">
              Reach out to us through any of these channels. We're here to support you!
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5 text-foreground/80 hover:text-primary"
              >
                <span>{link.emoji}</span>
                <span className="font-medium text-sm">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
