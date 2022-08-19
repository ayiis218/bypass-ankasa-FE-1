import React from "react";
import style from "../../../styles/BookingDetail.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiFlightTakeoffFill } from "react-icons/ri";
import logoAirline from "../../../public/images/garuda-logo.png";
import Image from "next/image";
import StatusTicket from "../../../components/organisms/statusTicket";
import QrCodeGenerator from "../../../components/organisms/qrCodeGenerator";
import { useRouter } from "next/router";

const BookingDetail = () => {
  const router = useRouter();
  const navigate = (e) => {
    e.preventDefault();
    router.push("/my-booking");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className={`col-md-4 ${style.bodyWrapper}`}>
          <div className="container">
            <div className="row align-items-center mt-4">
              <div className="col-2">
                <IoIosArrowBack size={30} color="#FFFFFF" onClick={navigate} />
              </div>
              <div className={`col-8 ${style.header}`}>
                <span>Booking Pass</span>
              </div>
              <div className="col-2 text-end">
                <BsThreeDotsVertical size={25} color="#FFFFFF" />
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <div className={`text-center ${style.logoAirline}`}>
                  <Image src={logoAirline} width={100} height={60} />
                </div>
                <div className={`row mt-4 align-items-center ${style.flight}`}>
                  <div className="col-4 text-end">
                    <span>IDN</span>
                  </div>
                  <div className="col-4 text-center">
                    <RiFlightTakeoffFill size={25} color="#979797" />
                  </div>
                  <div className="col-4 text-start">
                    <span>JPN</span>
                  </div>
                </div>
                <div className="row text-center mt-3">
                  <StatusTicket status={"success"} />
                </div>
              </div>
              <hr />
              <div className="card-body">
                <div className={`row ${style.ticketInfo}`}>
                  <div className="col-3">
                    <p>Code</p>
                    <h5>AB-221</h5>
                  </div>
                  <div className="col-3">
                    <p>Class</p>
                    <h5>Economy</h5>
                  </div>
                  <div className="col-3">
                    <p>Terminal</p>
                    <h5>A</h5>
                  </div>
                  <div className="col-3">
                    <p>gate</p>
                    <h5>221</h5>
                  </div>
                  <div className="col-8 mt-4">
                    <p>Departure</p>
                    <h5>Monday, 20 July ‘20 - 12:33</h5>
                  </div>
                </div>
                <div className={`row text-center ${style.qrCodeTicket}`}>
                  <QrCodeGenerator text={"Success"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetail;
