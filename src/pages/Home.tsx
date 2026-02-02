import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen -mt-16 md:mt-0">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
