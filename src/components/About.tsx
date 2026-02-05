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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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

          {/* Specialists Section */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">Our Specialists</h3>
            <p className="text-foreground/70 text-lg">Meet the experts dedicated to your maternal health journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow-card text-center">
              <img 
                src="https://www.dropbox.com/scl/fi/9c4dgc9nbfrr72n6xs4tn/mdoc.jpeg?rlkey=z7b8mtm2k72f4glnbhk31kmho&st=4chrtewn&raw=1" 
                alt="Kenneth O. Odhiambo"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-soft"
              />
              <h4 className="font-serif text-xl font-semibold text-primary mb-2">Kenneth O. Odhiambo</h4>
              <p className="text-coral font-medium mb-3">County PMTCT and Pediatric Specialist</p>
              <div className="text-foreground/70 text-sm space-y-1">
                <p>MPH: Epidemiology & Nutrition</p>
                <p>BSc PH | RN</p>
                <p className="font-medium mt-2">CIHEB Kenya</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card text-center">
              <img 
                src="https://www.dropbox.com/scl/fi/iksl9tarokolee5q56px6/sdoc.jpeg?rlkey=2apsfpbhrpnkolow8jolc707z&st=292ys1ss&raw=1" 
                alt="Agnes Onyango"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-soft"
              />
              <h4 className="font-serif text-xl font-semibold text-primary mb-2">Agnes Onyango</h4>
              <p className="text-coral font-medium mb-3">Senior RN & Midwife</p>
              <div className="text-foreground/70 text-sm">
                <p className="font-medium">Jaramogi Teaching and Referral Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
