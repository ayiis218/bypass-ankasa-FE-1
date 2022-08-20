import Image from "next/image";
import React from "react";
import style from "./style/loading.module.css";
import loading from "../../assets/loading.gif";

const LoadingComp = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="container">
            <div
              className={`row align-items-center justify-content-center ${style.fixHeight}`}
            >
              <div className="col-5">
                <Image src={loading} width={150} height={90} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingComp;
