import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="carousel-container flex justify-center items-center">
      <AliceCarousel>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="sliderimg"
          />
        ))}
      </AliceCarousel>
    </div>
  );
};

export default Carousel;
