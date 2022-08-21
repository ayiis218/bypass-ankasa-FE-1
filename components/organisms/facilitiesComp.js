import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiCameraMovie } from "react-icons/bi";
import { FaToilet, FaWifi } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

const FacilitiesComp = ({ facilities }) => {
  const facilitiesCheck = (type) => {
    if (type === "Food") {
      return (
        <button
          style={{
            width: "136px",
            backgroundColor: "#6DDA6B",
            padding: "15px",
            color: "#fff",
            fontWeight: "700",
            textTransform: "uppercase",
            border: "0",
            borderRadius: "8px",
          }}
        >
          <MdFastfood size={20} /> Food
        </button>
      );
    }
    if (type === "Toilet") {
      return (
        <button
          style={{
            width: "136px",
            backgroundColor: "#E45D32",
            padding: "15px",
            color: "#fff",
            fontWeight: "700",
            textTransform: "uppercase",
            border: "0",
            borderRadius: "8px",
          }}
        >
          <FaToilet size={20} /> Toilet
        </button>
      );
    }
    if (type === "Wifi") {
      return (
        <button
          style={{
            width: "136px",
            backgroundColor: "#7861D7",
            padding: "15px",
            color: "#fff",
            fontWeight: "700",
            textTransform: "uppercase",
            border: "0",
            borderRadius: "8px",
          }}
        >
          <FaWifi size={20} /> Wifi
        </button>
      );
    }
    if (type === "Movie") {
      return (
        <button
          style={{
            width: "136px",
            backgroundColor: "#FFCA2B",
            padding: "15px",
            color: "#fff",
            fontWeight: "700",
            textTransform: "uppercase",
            border: "0",
            borderRadius: "8px",
          }}
        >
          <BiCameraMovie size={20} /> Movie
        </button>
      );
    }
  };
  return (
    <>
      <Swiper slidesPerView={2.5} slidesPerGroup={1} loopFillGroupWithBlank>
        <div className="row mt-3">
          {facilities?.map((item, index) => (
            <SwiperSlide>
              <div key={index} className="col-5">
                {facilitiesCheck(item)}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default FacilitiesComp;
