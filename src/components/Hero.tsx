import heroMothers from '@/assets/hero-mothers.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient pt-20 overflow-hidden">
      {/* Floating Flowers */}
      <div className="floating-flower top-16 left-4 md:left-8 text-4xl" style={{ animationDelay: '0s' }}>
        🌸
      </div>
      <div className="floating-flower top-32 right-4 md:right-12 text-3xl" style={{ animationDelay: '2s' }}>
        🌺
      </div>
      <div className="floating-flower bottom-20 left-8 text-2xl" style={{ animationDelay: '4s' }}>
        🌷
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-tight">
              Kusaidia Mama Kwa Upendo Na Uelewa
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl">
              Pregnancy, childbirth, and breastfeeding are powerful yet challenging stages in a woman's life. Many women experience questions that come with physical, emotional, and informational challenges that are not fully addressed at routine clinic. Our expert team seeks to reach pregnant and lactating women in virtual spaces or in-person to offer customized, personalized compassionate maternal support for a better experience on maternal health during this transitional period.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Explore Services
              </a>
              <a href="#book" className="btn-outline">
                Book a Session
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroMothers}
                alt="African mothers supporting each other through pregnancy and motherhood"
                className="w-full h-auto object-cover"
              />
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm p-4 md:p-6 mx-4 mb-4 rounded-2xl shadow-card">
                <p className="text-center font-serif text-lg md:text-xl text-coral italic">
                  "Hujambo Mama, Tupo Pamoja Na Wewe!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
