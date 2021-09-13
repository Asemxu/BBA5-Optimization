import React from 'react';
import Carousel from 'react-elastic-carousel';
import {
  carrito,
  resbaladera,
  torre,
  scooter,
  casita,
} from '../../Images/Decorations/awards';

export const CarouselAwards = () => {
  

  return (
    <div className="mt-3">
      <Carousel itemsToShow={1} showArrows={false}>
        <div className="award">
            <div
              className="white-image"
              
            ></div>
            <img className="award-image" alt="Premio Carrito" src={carrito} />
            <p>2 carritos</p>
          </div>
        <div className="award">
            <div
              className="white-image"
              
            ></div>
            <img className="award-image" alt="Premio Carrito" src={resbaladera} />
            <p>2 resbaladeras</p>
          </div>
        <div className="award">
            <div
              className="white-image"
              
            ></div>
            <img className="award-image" alt="Premio Carrito" src={torre} />
            <p>2 torres</p>
          </div>
        <div className="award">
            <div
              className="white-image"
              
            ></div>
            <img className="award-image" alt="Premio Carrito" src={scooter} />
            <p>2 scooter</p>
          </div>
        <div className="award">
            <div
              className="white-image"
              
            ></div>
            <img className="award-image" alt="Premio Carrito" src={casita} />
            <p>10 casitas</p>
          </div>
      </Carousel>
    </div>
  );
};
