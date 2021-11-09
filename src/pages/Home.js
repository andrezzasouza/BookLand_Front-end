// import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/Header';
import HomeCarousel from '../components/Carousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HomeCarousel />
      <Footer />
    </>
  );
}
