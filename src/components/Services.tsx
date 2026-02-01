import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: '🤰',
    title: 'Preconception Counseling',
    description: 'Prepare your body and mind for a healthy pregnancy journey',
  },
  {
    icon: '📅',
    title: 'Pregnancy Journey & What to Expect',
    description: 'Month-by-month guidance through your pregnancy',
  },
  {
    icon: '👶',
    title: 'Education at Childbirth & What to Expect',
    description: 'Understanding labor, delivery, and postpartum care',
  },
  {
    icon: '🍼',
    title: 'Infant Feeding 1st 2 Weeks & Up to 6 Months',
    description: 'Breastfeeding support and infant nutrition guidance',
  },
  {
    icon: '❤️',
    title: 'HIV Context in Pregnancy and Lactation',
    description: 'Specialized support for HIV-positive mothers',
  },
  {
    icon: '🧠',
    title: 'Maternal Mental & Emotional Support',
    description: 'Addressing anxiety, depression, and emotional wellness',
  },
  {
    icon: '👥',
    title: 'Community Individualized Expert Support',
    description: 'Personalized support from our team of experts',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-4xl mb-4 block">🌱</span>
          <h2 className="section-title">Nurture HUB Customized Services</h2>
          <p className="section-subtitle">
            Comprehensive maternal health support tailored to your unique journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service flex items-start gap-4 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
              <ArrowRight className="flex-shrink-0 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Other Services Link */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <span>✨</span>
            Other Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
