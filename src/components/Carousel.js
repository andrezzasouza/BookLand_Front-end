import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/images/carousel-img1.jpg';
import img2 from '../assets/images/carousel-img2.jpg';
import img3 from '../assets/images/carousel-img3.jpg';

export default () => (
  <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
    <CarouselPage>
      <img alt="" src={img2} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img1} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img3} />
    </CarouselPage>
    <CarouselPage>
      <img alt="" src={img2} />
    </CarouselPage>
  </Carousel>
);

const CarouselPage = styled.div`
  img {
    object-fit: cover;
    height: 400px;
  }
`;
