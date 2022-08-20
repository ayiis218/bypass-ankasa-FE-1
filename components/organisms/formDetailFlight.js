/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Default from '../../public/images/garuda.svg';
import flight from '../../public/icons/flight.svg';
import back from '../../public/icons/btnback.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import style from './style/detail.module.css';

const formFlight = ({ data }) => {
   const router = useRouter();
   // const feature = data?.map((item) => item.facilities);
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className={style.header}>
                  <div className={`ms-2 mt-4 ${style.icon}`}>
                     <Image src={back} alt="Back" />
                  </div>
               </div>
               {!data.length ? (
                  <></>
               ) : (
                  data.map((item) => (
                     <>
                        <div className={style.container}>
                           <div className={style.content}>
                              <div className={style.result}>
                                 <div className="row mt-3 ms-2">
                                    <div className="col-4">
                                       <div className={style.city}>
                                          <h2 className={style.city}>
                                             {item.origin}
                                          </h2>
                                          <h6>12.33</h6>
                                       </div>
                                    </div>
                                    <div className="col-2 mt-2">
                                       <div className="ms-3 mt-3">
                                          <Image src={flight} alt="" />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div className="ms-2">
                                          <h2 className={style.city}>
                                             {item.destination}
                                          </h2>
                                          <h6>15.21</h6>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row ms-2 mt-3">
                                    <div className="col-6">
                                       <Image
                                          src={item.airline_image}
                                          alt=""
                                          height={50}
                                          width={70}
                                       />
                                    </div>
                                    <div className="col-6">
                                       <div className="ms-5 mt-4">
                                          <h6>Review</h6>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row ms-2 mt-3">
                                    <div className="col-3">
                                       <h6>Code</h6>
                                       <p>{item.airline_code}</p>
                                    </div>
                                    <div className="col-3">
                                       <div className="ms-1">
                                          <h6>Class</h6>
                                          <p>{item.class_category}</p>
                                       </div>
                                    </div>
                                    <div className="col-3">
                                       <h6>Terminal</h6>
                                       <p>A</p>
                                    </div>
                                    <div className="col-3">
                                       <h6>Gate</h6>
                                       <p>221</p>
                                    </div>
                                 </div>
                                 <hr />
                                 <div className="row">
                                    <div className="col-6">
                                       <span>
                                          <div className="row ms-4">
                                             <div className="col-3">
                                                <p>5</p>
                                             </div>
                                             <div className="col-3">
                                                <h6>Child</h6>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                    <div className="col-6">
                                       <span>
                                          <div className="row ms-4">
                                             <div className="col-3">
                                                <p>5</p>
                                             </div>
                                             <div className="col-3">
                                                <h6>Adult</h6>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className={style.main}>
                              <div>
                                 <h5>Facilities</h5>
                                 <Swiper
                                    slidesPerView={2.5}
                                    slidesPerGroup={1}
                                    loopFillGroupWithBlank
                                 >
                                    <div className="row mt-3">
                                       <SwiperSlide>
                                          <div className="col-5">
                                             <button className={style.snack}>
                                                {item.facilities[0]}
                                             </button>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <div className="col-5">
                                             <button className={style.wifi}>
                                                {item.facilities[1]}
                                             </button>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <div className="col-2">
                                             <button className={style.room}>
                                                {item.facilities[2]}
                                             </button>
                                          </div>
                                       </SwiperSlide>
                                    </div>
                                 </Swiper>
                              </div>

                              <div>
                                 <div className=" mt-3 text-secondary">
                                    <div className="row mt-5">
                                       <div className="col-6">
                                          <h6>Total you pay</h6>
                                       </div>
                                       <div className="col-6">
                                          <div className="ms-5">
                                             <p>{item.price}</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <button
                                 className={style.button}
                                 onClick={() =>
                                    router.push(
                                       `/my-booking/detail/${item.ticket_id}`
                                    )
                                 }
                              >
                                 BOOK FLIGHT
                              </button>
                           </div>
                        </div>
                     </>
                  ))
               )}
            </div>
         </div>
      </div>
   );
};

export default formFlight;
