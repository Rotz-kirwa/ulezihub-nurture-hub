import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-foreground/70">
                Your privacy and data protection are important to us
              </p>
            </div>

            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Terms of Use
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  By using Jifunze Ulezi Hub, you agree to our terms: Content for informational purposes only, consult experts for advice. We protect your data.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Consult Experts
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We strongly encourage you to consult with qualified healthcare professionals and experts for personalized advice regarding your maternal health journey. Our services complement, but do not replace, professional medical care.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Data Protection
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We are committed to protecting your personal data. All information you share with us is kept confidential and secure. We do not share your personal information with third parties without your explicit consent. Your data is used solely to provide you with our maternal health support services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
