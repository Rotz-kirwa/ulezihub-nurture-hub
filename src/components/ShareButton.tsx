import { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link2, Check, X, MessageCircle } from 'lucide-react';

interface ShareButtonProps {
  title?: string;
  description?: string;
  className?: string;
}

const ShareButton = ({ 
  title = "Jifunze Ulezi Hub - Maternal Health Support in Kenya",
  description = "Expert maternal health support for pregnant and lactating women in Kenya. Personalized care for your pregnancy and motherhood journey.",
  className = ""
}: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const url = typeof window !== 'undefined' ? window.location.href : 'https://www.jifunzeulezi.co.ke';
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-sky-500 hover:bg-sky-600',
      textColor: 'text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-blue-700 hover:bg-blue-800',
      textColor: 'text-white'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%0A%0A${encodedDescription}%0A%0A${encodedUrl}`,
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-white'
    }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Main Share Button */}
      <button
        onClick={handleNativeShare}
        className={`inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg ${className}`}
        aria-label="Share this page"
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </button>

      {/* Share Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-card rounded-2xl shadow-2xl p-6 w-full max-w-md animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-sage-light rounded-full transition-colors"
              aria-label="Close share dialog"
            >
              <X className="w-5 h-5 text-foreground/60" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                Share Jifunze Ulezi Hub
              </h3>
              <p className="text-foreground/70 text-sm">
                Help spread the word about maternal health support
              </p>
            </div>

            {/* Social Share Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {shareLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl ${link.color} ${link.textColor} transition-all hover:scale-105`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Copy Link Section */}
            <div className="border-t border-border pt-4">
              <p className="text-sm text-foreground/60 mb-3">Or copy link</p>
              <div className="flex gap-2">
                <div className="flex-1 bg-sage-light px-4 py-3 rounded-lg text-sm text-foreground/80 truncate">
                  {url}
                </div>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium transition-all hover:scale-105"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Preview Card */}
            <div className="mt-6 p-4 bg-sage-light rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">{title}</p>
                  <p className="text-foreground/60 text-xs line-clamp-2 mt-1">{description}</p>
                  <p className="text-primary text-xs mt-1">jifunzeulezi.co.ke</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareButton;
