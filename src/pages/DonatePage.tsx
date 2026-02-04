import Navbar from '@/components/Navbar';
import DonationPage from '@/components/DonationPage';
import Footer from '@/components/Footer';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <DonationPage isDonation={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
