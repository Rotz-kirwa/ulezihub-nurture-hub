const features = [
  { icon: '❤️', title: 'Safari ya Ujauzito & Kilicho Mbele', subtitle: 'Pregnancy journey guidance' },
  { icon: '🤱', title: 'Msaada wa Kunyonyenesa', subtitle: 'Breastfeeding support' },
  { icon: '🧠', title: 'Afya ya Akili ya Mama', subtitle: 'Maternal mental health' },
  { icon: '👥', title: 'Jukwaa & Msaada wa Jamii', subtitle: 'Community platform & support' },
];

const stats = [
  { value: '100+', label: 'Mothers Supported' },
  { value: '7+', label: 'Expert Services' },
  { value: '24/7', label: 'Virtual Support' },
  { value: '🌍', label: 'Community Driven' },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-sage-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">About Nurture HUB</h2>
            <p className="text-foreground/80 text-lg leading-relaxed mt-6">
              Our expert team of maternal health professionals is dedicated to supporting pregnant and lactating women through every stage of their journey. We believe that every mother deserves compassionate, personalized care that addresses not just physical health, but emotional and informational needs as well.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mt-4">
              Through virtual and in-person sessions, we bridge the gap between routine clinical care and the holistic support mothers truly need during this transformative time in their lives.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-3xl mb-3 block">{feature.icon}</span>
                <h4 className="font-serif text-sm font-semibold text-foreground mb-1">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-xs">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
