/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import style from "../../../styles/BookingDetail.module.css";
import axios from "axios";
import moment from "moment";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiFlightTakeoffFill } from "react-icons/ri";
import logoAirline from "../../../public/images/garuda-logo.png";
import Image from "next/image";
import StatusTicket from "../../../components/organisms/statusTicket";
import QrCodeGenerator from "../../../components/organisms/qrCodeGenerator";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import LoadingComp from "../../../components/organisms/loadingComp";

const BookingDetail = () => {
  const loggedInUserState = useSelector((state) => state.loggedInUser);
  const { user } = loggedInUserState;
  const router = useRouter();
  const id_booking = router?.query?.id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDetailBooking();
  }, [user?.user_id]);

  const getDetailBooking = () => {
    setLoading(true);
    axios
      .get(`https://bypass-ankasa-backend.herokuapp.com/books/${id_booking}`)
      .then((res) => {
        const data = res?.data?.data;
        if (data.length === 1) {
          setData(res?.data?.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

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
            {loading ? (
              <LoadingComp />
            ) : (
              data.map((item) => (
                <>
                  <div className="card mt-4">
                    <div className="card-body">
                      <div className={`text-center ${style.logoAirline}`}>
                        <Image
                          src={item.airline_image}
                          alt=""
                          width={100}
                          height={60}
                        />
                      </div>
                      <div
                        className={`row mt-4 align-items-center ${style.flight}`}
                      >
                        <div className="col-5 text-end">
                          <span>{item.origin}</span>
                        </div>
                        <div className="col-2 text-center">
                          <RiFlightTakeoffFill size={25} color="#979797" />
                        </div>
                        <div className="col-5 text-start">
                          <span>{item.destination}</span>
                        </div>
                      </div>
                      <div className="row text-center mt-3">
                        <StatusTicket status={item.ticket_status} />
                      </div>
                    </div>
                    <hr />
                    <div className="card-body">
                      <div className={`row ${style.ticketInfo}`}>
                        <div className="col-3">
                          <p>Code</p>
                          <h5>{item.airline_code}</h5>
                        </div>
                        <div className="col-3">
                          <p>Class</p>
                          <h5>{item.class_category}</h5>
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
                          <h5>{moment(item.departure).format("llll")}</h5>
                        </div>
                      </div>
                      <div className={`row text-center ${style.qrCodeTicket}`}>
                        <QrCodeGenerator text={item.ticket_status} />
                      </div>
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetail;
