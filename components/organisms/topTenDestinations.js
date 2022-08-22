import React from "react";
import style from "../../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/router";

const TopTenDestinations = (props) => {
  const router = useRouter();

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
          slidesToShow: 3.8,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const navigateToDestination = (city) => {
    router.push(`/search-flight/${city}`);
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-7">
          <p className={style.topDestinations}>Top 10 destinations</p>
        </div>
      </div>
      <div id="topTenDestinations" className="row mt-2 mb-4">
        <Slider {...settings}>
          {props?.data?.map((item, index) => (
            <div
              key={index}
              onClick={() => navigateToDestination(item.city)}
              className={`card ${style.cardDestinations} text-center`}
            >
              <Image
                src={item.destination_image}
                height={70}
                width={70}
                alt=""
              />
              <div className="card-body">
                <p className="card-text text-center">{item.city}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TopTenDestinations;
