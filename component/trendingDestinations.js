import React from "react";
import style from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import exampleImgDestination from "../public/images/example-destination.png";

const TrendingDestinations = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-7">
          <p className={style.trendingTitle}>Trending destinations</p>
        </div>
        <div className="col-5 text-end">
          <p className={style.viewAll}>View all</p>
        </div>
      </div>
      <div className="row mt-2">
        <Slider {...settings}>
          <div className={`card ${style.destinationsCarousel}`}>
            <Image
              className={style.destinationsImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`card ${style.destinationsCarousel}`}>
            <Image
              className={style.destinationsImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`card ${style.destinationsCarousel}`}>
            <Image
              className={style.destinationsImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`card ${style.destinationsCarousel}`}>
            <Image
              className={style.destinationsImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default TrendingDestinations;
