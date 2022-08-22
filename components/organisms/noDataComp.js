import React from "react";
import img from "../../assets/illustration.png";
import style from "./style/noData.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const NoDataComp = () => {
  const router = useRouter();
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="container">
            <div
              className={`row align-items-center justify-content-center ${style.fixHeight}`}
            >
              <div className={`col-9 ${style.content} text-center`}>
                <Image src={img} width={900} height={900} alt="no data" />
                <p className="text-center text-secondary">
                  Flight schedule that you are looking for is not available.
                </p>
                <button
                  type="button"
                  className="btn btn-light btn-sm"
                  onClick={() => router.push("/")}
                >
                  Back to home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoDataComp;
