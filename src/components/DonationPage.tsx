import { useState } from 'react';
import { Heart, Loader2, Copy, Check } from 'lucide-react';

const DonationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<'paybill' | 'stk'>('paybill');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    amount: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const paybillNumber = '3230223';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Format phone number (remove spaces, add 254 if needed)
    let phone = formData.phone.replace(/\s/g, '');
    if (phone.startsWith('0')) {
      phone = '254' + phone.substring(1);
    } else if (!phone.startsWith('254')) {
      phone = '254' + phone;
    }

    try {
      // Simulated API call for STK Push
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setMessage(`STK Push sent to ${phone}. Please check your phone and enter your M-Pesa PIN to complete the donation.`);
      setFormData({ name: '', phone: '', amount: '' });
    } catch (error) {
      setMessage('An error occurred. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const suggestedAmounts = [100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-sage-light to-background w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-5xl mb-4 block">💝</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Support Our Mission
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Your generous donation helps us provide essential maternal health support to mothers in need. 
              Every contribution makes a difference in a mother's journey.
            </p>
          </div>

          {/* Donation Form */}
          <div className="bg-card p-8 rounded-2xl shadow-elevated animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Payment Method Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('paybill')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                  paymentMethod === 'paybill'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-sage-light text-foreground hover:bg-sage-light/80'
                }`}
              >
                Pay via Till Number
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('stk')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                  paymentMethod === 'stk'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-sage-light text-foreground hover:bg-sage-light/80'
                }`}
              >
                M-Pesa Express
              </button>
            </div>

            {/* Paybill Method */}
            {paymentMethod === 'paybill' && (
              <div className="space-y-6">
                <div className="bg-sage-light p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-4 text-center">M-Pesa Till Number Instructions</h3>
                  <ol className="space-y-3 text-sm text-foreground/80">
                    <li className="flex gap-2">
                      <span className="font-semibold">1.</span>
                      <span>Go to M-Pesa menu on your phone</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">2.</span>
                      <span>Select Lipa na M-Pesa</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">3.</span>
                      <span>Select Buy Goods and Services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">4.</span>
                      <div className="flex-1">
                        <span>Enter Till Number: </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold text-2xl text-primary">{paybillNumber}</span>
                          <button
                            onClick={() => copyToClipboard(paybillNumber)}
                            className="p-2 hover:bg-white rounded-lg transition-colors"
                            title="Copy till number"
                          >
                            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">5.</span>
                      <span>Enter the amount you wish to donate</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">6.</span>
                      <span>Enter your M-Pesa PIN and confirm</span>
                    </li>
                  </ol>
                </div>
                <p className="text-center text-sm text-foreground/60">
                  You will receive a confirmation message from M-Pesa
                </p>
              </div>
            )}

            {/* STK Push Method */}
            {paymentMethod === 'stk' && (
              <div className="space-y-6">
                <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl text-center">
                  <p className="text-lg font-semibold text-foreground mb-4">
                    This payment option is not available at the moment
                  </p>
                  <p className="text-foreground/70 mb-6">
                    Please use the Till Number payment method instead
                  </p>
                  <button
                    onClick={() => setPaymentMethod('paybill')}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all"
                  >
                    Go to Till Number Payment
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="mt-8 bg-card p-6 rounded-2xl shadow-soft animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-serif text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              How Your Donation Helps
            </h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>• Provides free maternal health consultations</li>
              <li>• Supports mental health counseling for mothers</li>
              <li>• Funds educational materials and resources</li>
              <li>• Enables community outreach programs</li>
              <li>• Helps mothers in need access quality care</li>
            </ul>
          </div>

          {/* Security Note */}
          <p className="text-center text-xs text-foreground/60 mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            🔒 Secure M-Pesa payment. You'll receive an STK Push prompt on your phone to complete the transaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationPage;
