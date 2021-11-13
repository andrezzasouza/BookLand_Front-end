import { CarouselPage, CarouselContainer } from '../assets/styles/HomeStyle';
import imageArray from '../assets/others/CarouselImages';

export default () => (
  <CarouselContainer showThumbs={false} showStatus={false} infiniteLoop autoPlay>
    {imageArray.map((image, index) => (
      <CarouselPage>
        <img alt={image.alt} src={image.image} index={index} />
      </CarouselPage>
    ))}
  </CarouselContainer>
);
