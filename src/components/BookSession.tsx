import { useState } from 'react';

const services = [
  'Preconception Counseling',
  'Pregnancy Journey & What to Expect',
  'Education at Childbirth & What to Expect',
  'Infant Feeding 1st 2 Weeks & Up to 6 Months',
  'HIV Context in Pregnancy and Lactation',
  'Maternal Mental & Emotional Support',
  'Community Individualized Expert Support',
];

const BookSession = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I would like to book a session:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/254737633532?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-sage-light to-background w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-5xl mb-4 block">🌟</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Book Your Session
            </h2>
            <p className="text-foreground/70 text-lg">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-elevated animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white"
                >
                  <option value="">Choose a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-elevated hover:shadow-card hover:scale-105 transition-all"
              >
                Submit Booking Request
              </button>
            </div>
          </form>

          {/* Info */}
          <p className="text-center text-sm text-foreground/60 mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            By submitting this form, you'll be redirected to WhatsApp to complete your booking
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
