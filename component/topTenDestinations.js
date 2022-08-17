import React from "react";
import style from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import exampleImgDestination from "../public/images/example-destination.png";

const TopTenDestinations = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-7">
          <p className={style.topDestinations}>Top 10 destinations</p>
        </div>
      </div>
      <div className="row mt-2 mb-4">
        <Slider {...settings}>
          <div className={`${style.topTenCarousel}`}>
            <div className="row">
              <Image
                className={style.topTenImage}
                src={exampleImgDestination}
                layout="fill"
              />
            </div>
          </div>

          <div className={`${style.topTenCarousel}`}>
            <Image
              className={style.topTenImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`${style.topTenCarousel}`}>
            <Image
              className={style.topTenImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`${style.topTenCarousel}`}>
            <Image
              className={style.topTenImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`${style.topTenCarousel}`}>
            <Image
              className={style.topTenImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`${style.topTenCarousel}`}>
            <Image
              className={style.topTenImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`${style.topTenCarousel}`}>
            <Image
              className={style.topTenImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`${style.topTenCarousel}`}>
            <Image
              className={style.topTenImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
          <div className={`${style.topTenCarousel}`}>
            <Image
              className={style.topTenImage}
              src={exampleImgDestination}
              layout="fill"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default TopTenDestinations;
