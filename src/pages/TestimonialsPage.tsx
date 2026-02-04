import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Amina M.",
      role: "New Mother",
      text: "The support I received during my pregnancy was invaluable. The counselors were compassionate and knowledgeable, helping me navigate every challenge with confidence.",
      rating: 5
    },
    {
      name: "Grace K.",
      role: "First-Time Mother",
      text: "I was anxious about breastfeeding, but the lactation support sessions gave me the skills and confidence I needed. My baby is thriving now!",
      rating: 5
    },
    {
      name: "Peter O.",
      role: "Expectant Father",
      text: "As a father-to-be, I didn't know how to support my wife. The sessions on men's role in maternal health opened my eyes and strengthened our bond.",
      rating: 5
    },
    {
      name: "Faith W.",
      role: "Mother of Two",
      text: "The mental health support during postpartum was a lifesaver. I felt heard, understood, and empowered to take care of myself and my baby.",
      rating: 5
    },
    {
      name: "John M.",
      role: "Young Father",
      text: "The boy child sessions helped me understand my responsibilities as a father. I'm now actively involved in my child's care and development.",
      rating: 5
    },
    {
      name: "Mary N.",
      role: "Lactating Mother",
      text: "The nutrition counseling helped me understand what my body needs during breastfeeding. I feel healthier and more energized.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Clients Say
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real stories from mothers, fathers, and families we've had the privilege to support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 md:p-8 rounded-lg shadow-sm border border-sage-light hover:shadow-md transition-shadow"
              >
                <Quote className="text-coral mb-4" size={32} />
                <p className="text-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-coral text-xl">★</span>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-6">
              Ready to start your journey with us?
            </p>
            <a href="/book" className="btn-primary inline-block">
              Book Your Session
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
