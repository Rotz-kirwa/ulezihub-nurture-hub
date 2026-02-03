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

        {/* Services List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{service.icon}</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
