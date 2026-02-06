

const services = [
  { icon: '🤰', title: 'Preconception Counseling', description: 'Prepare your body and mind for a healthy pregnancy journey' },
  { icon: '📅', title: 'Pregnancy Journey & What to Expect', description: 'Month-by-month guidance through your pregnancy' },
  { icon: '👶', title: 'Education at Childbirth & What to Expect', description: 'Understanding labor, delivery, and postpartum care' },
  { icon: '🍼', title: 'Infant Feeding 1st 2 Weeks & Up to 6 Months', description: 'Breastfeeding support and infant nutrition guidance' },
  { icon: '❤️', title: 'HIV Context in Pregnancy and Lactation', description: 'Specialized support for HIV-positive mothers' },
  { icon: '🧠', title: 'Maternal Mental & Emotional Support', description: 'Addressing anxiety, depression, and emotional wellness' },
  { icon: '👨👦', title: 'Men & Boy Role in Maternal Health', description: 'Engaging fathers and boys in supporting maternal health' },
  { icon: '👥', title: 'Community Individualized Expert Support', description: 'Personalized support from our team of experts' },
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
              className="w-full h-auto md:h-[500px] lg:h-[600px] object-contain md:object-cover"
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

            <div className="flex flex-wrap gap-1.5 sm:gap-4 pt-4">
              <a href="/services" className="btn-primary text-center text-xs sm:text-base px-2.5 py-2 sm:px-6 sm:py-3">
                Services
              </a>
              <a href="/pricing" className="btn-outline text-center text-xs sm:text-base px-2.5 py-2 sm:px-6 sm:py-3">
                Pricing
              </a>
              <a href="/donate" className="btn-outline text-center text-xs sm:text-base px-2.5 py-2 sm:px-6 sm:py-3">
                Donate
              </a>
              <a href="/book" className="btn-outline text-center text-xs sm:text-base px-2.5 py-2 sm:px-6 sm:py-3">
                Book
              </a>
              <a href="/privacy-policy" className="btn-outline text-center text-xs sm:text-base px-2.5 py-2 sm:px-6 sm:py-3">
                Privacy
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
                  className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-soft transition-shadow"
                >
                  <span className="text-2xl flex-shrink-0">{service.icon}</span>
                  <div>
                    <h3 className="text-foreground font-semibold text-sm md:text-base mb-1">{service.title}</h3>
                    <p className="text-foreground/60 text-xs md:text-sm">{service.description}</p>
                  </div>
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
