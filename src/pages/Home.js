import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HomeCarousel from '../components/Carousel';
import HomeContainer from '../components/HomeContainer';
import Footer from '../components/Footer';
import { home } from '../services/api';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    home()
      .then((res) => {
        if (res.status === 200) {
          setBooks(res.data);
          setMessage('');
        }
        if (res.status === 204) {
          setBooks([]);
          setMessage(
            "Seems like we have run out of books. We'll restock soon. Please, come back later to find your favorite books again!",
          );
        }
      })
      .catch((err) => {
        const error = err.response.status;
        if (error === 500) {
          setMessage(
            "It wasn't possible to access the server. Please, try again later!",
          );
        }
      });
  }, []);

  return (
    <>
      <Header />
      <HomeCarousel />
      <HomeContainer
        books={books}
        message={message}
      />
      <Footer />
    </>
  );
}
