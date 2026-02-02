import Navbar from '@/components/Navbar';
import BookSession from '@/components/BookSession';
import Footer from '@/components/Footer';

const BookPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center">
        <BookSession />
      </div>
      <Footer />
    </div>
  );
};

export default BookPage;
