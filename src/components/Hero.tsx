

const services = [
  { icon: '🤰', title: 'Preconception Counseling' },
  { icon: '📅', title: 'Pregnancy Journey & What to Expect' },
  { icon: '👶', title: 'Education at Childbirth' },
  { icon: '🍼', title: 'Infant Feeding Support' },
  { icon: '❤️', title: 'HIV Context Support' },
  { icon: '🧠', title: 'Maternal Mental Health' },
  { icon: '👨👦', title: 'Men & Boy Child Role' },
  { icon: '👥', title: 'Community Expert Support' },
];

const Hero = () => {
  return (
    <section className="relative bg-cream pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="mb-8 md:mb-12 animate-fade-in">
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img
              src="https://foreground-flow-forge.lovable.app/assets/hero-mothers-CEmrg4QZ.jpg"
              alt="Mothers supporting each other through pregnancy and motherhood"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>

        {/* Content Section: Text + Services */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              Nurturing Healthy Motherhood, Fatherhood and Childhood Experience
            </h1>
            
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Pregnancy, childbirth, and breastfeeding are powerful yet challenging stages in a woman's life. Many women experience questions that come with physical, emotional, and informational challenges that are not fully addressed.
            </p>
            
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Our expert team seeks to reach pregnant and lactating women in virtual spaces or in-person to offer customized, personalized compassionate maternal support for a better experience on maternal health during this transitional period.
            </p>

            <div className="flex gap-2 sm:gap-4 pt-4">
              <a href="/services" className="btn-primary text-center text-xs sm:text-base px-3 py-2 sm:px-6 sm:py-3 flex-1 sm:flex-none">
                Services
              </a>
              <a href="/pricing" className="btn-outline text-center text-xs sm:text-base px-3 py-2 sm:px-6 sm:py-3 flex-1 sm:flex-none">
                Pricing
              </a>
              <a href="/book" className="btn-outline text-center text-xs sm:text-base px-3 py-2 sm:px-6 sm:py-3 flex-1 sm:flex-none">
                Book
              </a>
            </div>
          </div>

          {/* Services List */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-6">
              Our Services
            </h2>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-soft transition-shadow"
                >
                  <span className="text-2xl flex-shrink-0">{service.icon}</span>
                  <span className="text-foreground/80 text-sm md:text-base">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
