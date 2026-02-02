

const Hero = () => {
  return (
    <section className="relative hero-gradient pt-16 md:pt-20 overflow-hidden">
      {/* Floating Flowers - Hidden on mobile */}
      <div className="floating-flower top-16 left-4 md:left-8 text-4xl hidden md:block" style={{ animationDelay: '0s' }}>
        🌸
      </div>
      <div className="floating-flower top-32 right-4 md:right-12 text-3xl hidden md:block" style={{ animationDelay: '2s' }}>
        🌺
      </div>
      <div className="floating-flower bottom-20 left-8 text-2xl hidden md:block" style={{ animationDelay: '4s' }}>
        🌷
      </div>

      <div className="container mx-auto px-4 pb-4 md:py-20">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-start md:items-center">
          {/* Image */}
          <div className="relative animate-fade-in lg:scale-110 lg:order-2 -mt-2 md:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated h-[400px] md:h-[600px]">
              <img
                src="https://foreground-flow-forge.lovable.app/assets/hero-mothers-CEmrg4QZ.jpg"
                alt="African mothers supporting each other through pregnancy and motherhood"
                className="w-full h-full object-contain md:object-cover"
              />
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm p-3 md:p-6 mx-2 md:mx-4 mb-2 md:mb-4 rounded-2xl shadow-card">
                <p className="text-center font-serif text-base md:text-xl text-coral italic">
                  "Hujambo Mama, Tupo Pamoja Na Wewe!"
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 md:space-y-8 animate-fade-in lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-tight">
              Kusaidia Mama Kwa Upendo Na Uelewa
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl">
              Pregnancy, childbirth, and breastfeeding are powerful yet challenging stages in a woman's life. Many women experience questions that come with physical, emotional, and informational challenges that are not fully addressed at routine clinic. Our expert team seeks to reach pregnant and lactating women in virtual spaces or in-person to offer customized, personalized compassionate maternal support for a better experience on maternal health during this transitional period.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/services" className="btn-primary">
                Explore Services
              </a>
              <a href="/book" className="btn-outline">
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
