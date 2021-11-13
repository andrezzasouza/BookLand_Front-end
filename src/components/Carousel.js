import { Carousel } from 'react-responsive-carousel';
import { CarouselPage } from '../assets/styles/HomeStyle';
import imageArray from '../assets/others/CarouselImages';

export default () => (
  <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
    {imageArray.map((image, index) => (
      <CarouselPage>
        <img alt={image.alt} src={image.image} index={index} />
      </CarouselPage>
    ))}
  </Carousel>
);
