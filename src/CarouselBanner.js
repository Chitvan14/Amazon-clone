import React from "react";
import "./CarouselBanner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselBanner() {
  return (
    <div className="">
      <Carousel infiniteLoop autoPlay>
        <div className="carousel__image">
          <img className="" src="banner1.jpg" alt="" />
        </div>
        <div className="carousel__image">
          <img className="" src="banner2.jpg" alt="" />
        </div>
        <div className="carousel__image">
          <img className="" src="banner3.jpg" alt="" />
        </div>
      </Carousel>
     
    </div>
  );
}

export default CarouselBanner;
