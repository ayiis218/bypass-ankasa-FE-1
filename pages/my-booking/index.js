import React from "react";
import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import style from "../../styles/MyBooking.module.css";
import { RiFlightTakeoffLine } from "react-icons/ri";
import StatusTicket from "../../components/organisms/statusTicket";

const MyBooking = () => {
  return (
    <>
      <div className={`row justify-content-center ${style.bodyWrapper}`}>
        <div className={`col-md-4 p-0 ${style.myBookingWrapper}`}>
          <div className={`container ${style.fixHeight}`}>
            <Header title={"My Booking"} />
            <div className="container mt-4">
              <div className={style.cardBooking}>
                <div className="card mb-4">
                  <div className="card-body">
                    <p>Monday, 20 July ‘20 - 12:33</p>
                    <div className={style.countryCode}>
                      <h3>IDN</h3>
                      <RiFlightTakeoffLine size={30} color="#979797" />
                      <h3>JPN</h3>
                    </div>
                    <p className="card-text text-muted">
                      Garuda Indonesia, AB-221
                    </p>
                    <hr />
                    <div className="row">
                      <div className="col-4">
                        <p className={style.status}>Status</p>
                      </div>
                      <div className="col-8 text-end">
                        <StatusTicket status={"waiting"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>Monday, 20 July ‘20 - 12:33</p>
                  <div className={style.countryCode}>
                    <h3>IDN</h3>
                    <RiFlightTakeoffLine size={30} color="#979797" />
                    <h3>JPN</h3>
                  </div>
                  <p className="card-text text-muted">
                    Garuda Indonesia, AB-221
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-4">
                      <p className={style.status}>Status</p>
                    </div>
                    <div className="col-8 text-end">
                      <StatusTicket status={"success"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>Monday, 20 July ‘20 - 12:33</p>
                  <div className={style.countryCode}>
                    <h3>IDN</h3>
                    <RiFlightTakeoffLine size={30} color="#979797" />
                    <h3>JPN</h3>
                  </div>
                  <p className="card-text text-muted">
                    Garuda Indonesia, AB-221
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-4">
                      <p className={style.status}>Status</p>
                    </div>
                    <div className="col-8 text-end">
                      <StatusTicket status={"failed"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MyBooking;
