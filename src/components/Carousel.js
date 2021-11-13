import { Carousel } from 'react-responsive-carousel';
import { CarouselPage } from '../assets/styles/HomeStyle';
import img1 from '../assets/images/carousel-1.jpg';
import img2 from '../assets/images/carousel-2.jpg';
import img3 from '../assets/images/carousel-3.jpg';
import img4 from '../assets/images/carousel-4.jpg';
import img5 from '../assets/images/carousel-5.jpg';
import img6 from '../assets/images/carousel-6.jpg';
import img7 from '../assets/images/carousel-7.png';
import img8 from '../assets/images/carousel-8.jpg';
import img9 from '../assets/images/carousel-9.jpg';
import img10 from '../assets/images/carousel-10.jpg';
import img11 from '../assets/images/carousel-11.jpg';

export default () => (
  <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
    <CarouselPage>
      <img alt="" src={img1} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img2} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img3} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img4} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img5} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img6} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img7} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img8} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img9} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img10} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img11} />
    </CarouselPage>
  </Carousel>
);
