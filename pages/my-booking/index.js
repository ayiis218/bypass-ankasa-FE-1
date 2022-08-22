/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Footer from '../../components/organisms/footer';
import Header from '../../components/organisms/header';
import style from '../../styles/MyBooking.module.css';
import { RiFlightTakeoffLine } from 'react-icons/ri';
import StatusTicket from '../../components/organisms/statusTicket';
import LoadingComp from '../../components/organisms/loadingComp';

const MyBooking = () => {
   const loggedInUserState = useSelector((state) => state.loggedInUser);
   const { user } = loggedInUserState;
   const router = useRouter();
   const queryId = user?.user_id;
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      getBooking();
   }, [user?.user_id]);

   const getBooking = () => {
      setLoading(true);

      axios
         .get(
            `https://bypass-ankasa-backend.herokuapp.com/booking/user/${queryId}`
         )
         .then((res) => {
            setData(res?.data?.data);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err?.response?.data?.message);
            setLoading(false);
         });
   };
   return (
      <>
         <div className={`row justify-content-center ${style.bodyWrapper}`}>
            <div className={`col-md-4 p-0 ${style.myBookingWrapper}`}>
               <div className={`container ${style.fixHeight}`}>
                  <Header title={'My Booking'} />
                  {loading ? (
                     <LoadingComp />
                  ) : (
                     data?.map((item) => (
                        <div className="container mt-4">
                           <div className={style.cardBooking}>
                              <div className="card mb-4">
                                 <div className="card-body">
                                    <p>
                                       {moment(item.departure).format('llll')}
                                    </p>
                                    <div
                                       className={style.countryCode}
                                       onClick={() =>
                                          router.push(
                                             `/my-booking/detail/${item.booking_id}`
                                          )
                                       }
                                    >
                                       <h3>{item.origin}</h3>
                                       <RiFlightTakeoffLine
                                          size={30}
                                          color="#979797"
                                       />
                                       <h3>{item.destination}</h3>
                                    </div>
                                    <p className="card-text text-muted">
                                       {item.airline_name}, {item.airline_code}
                                    </p>
                                    <hr />
                                    <div className="row">
                                       <div className="col-4">
                                          <p className={style.status}>Status</p>
                                       </div>
                                       <div
                                          className="col-8 text-end"
                                          onClick={() => router.push(`/`)}
                                       >
                                          <StatusTicket
                                             status={item.ticket_status}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* <div className="card mb-4">
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
                                 <StatusTicket status={'success'} />
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
                                 <StatusTicket status={'failed'} />
                              </div>
                           </div>
                        </div>
                     </div> */}
                        </div>
                     ))
                  )}
               </div>

               <Footer />
            </div>
         </div>
      </>
   );
};

export default MyBooking;
