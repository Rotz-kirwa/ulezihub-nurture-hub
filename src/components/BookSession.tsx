import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const services = [
  'Preconception Counseling',
  'Pregnancy Journey & What to Expect',
  'Education at Childbirth & What to Expect',
  'Infant Feeding 1st 2 Weeks & Up to 6 Months',
  'HIV Context in Pregnancy and Lactation',
  'Maternal Mental & Emotional Support',
  'Men & Boy Role in Maternal Health',
  'Community Individualized Expert Support',
];

const BookSession = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I would like to book a session:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\nService: ${formData.service}\nMessage: ${formData.message}`;
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
                  placeholder="07XX XXX XXX"
                />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors"
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

              {/* Privacy Policy */}
              <div className="bg-sage-light p-4 rounded-lg">
                <p className="text-sm text-foreground/70">
                  By clicking submit, you agree to our privacy policy and consent to the collection and use of your personal information for booking purposes. Your data will be kept confidential and used solely to provide you with our services.
                </p>
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
