const BookSession = () => {
  return (
    <section id="book" className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <span className="text-4xl mb-4 block">🌟</span>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-primary-foreground/80 mb-8">
            If interested, book a session with us NOW
          </p>
          <a
            href="mailto:hello@nurturehub.com?subject=Book a Session"
            className="inline-block bg-card text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-elevated hover:shadow-card hover:scale-105 transition-all"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
