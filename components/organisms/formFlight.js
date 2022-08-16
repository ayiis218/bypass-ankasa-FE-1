/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';

import back from '../../public/icons/btnback.svg';
import arrow from '../../public/icons/arrow.svg';
import go from '../../public/icons/white-arrow.svg';
import full from '../../public/icons/fullScreen.svg';
import style from './style/flight.module.css';
import { useRouter } from 'next/router';

const formFlight = () => {
   const router = useRouter();
   /*    const [deptCity, setDeptCity] = useState('');
   const [arrCity, setArrCity] = useState(''); */
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className={`w-100 ${style.header}`}>
                  <div className="row w-100">
                     <div className="col-6 d-flex justify-content-start">
                        <Image src={back} alt="Back" />
                     </div>
                     <div className="col-6 d-flex justify-content-end">
                        <Image src={full} alt="full" />
                     </div>
                     <div className={style.title}>
                        <h3>Destinations</h3>
                     </div>
                  </div>
               </div>
               <div className={style.container}>
                  <div className={style.content}>
                     <div className={style.box}>
                        <div className="text-secondary">From</div>

                        <select
                           className="font-weight-bold form-control w-auto"
                           name="deptCity"
                           style={{ border: 'none' }}
                           // value={deptCity}
                        >
                           <option value="">Medan</option>
                           <option value="loading">Loading</option>
                           <option value="error">Error</option>
                        </select>
                        <p className={`text-secondary${style.dest}`}>
                           Indonesia
                        </p>
                     </div>
                     <Image
                        src={arrow}
                        alt="arrow"
                        /* onClick={() => {
                        setDeptCity(arrCity);
                        setArrCity(deptCity);
                     }} */
                     />
                     <div className={style.box}>
                        <div className="text-secondary">To</div>

                        <select
                           className="font-weight-bold form-control w-auto"
                           style={{ border: 'none' }}
                           name="arrCity"
                           // value={arrCity}
                        >
                           <option value="">Tokyo</option>
                           <option value="loading">Loading</option>
                           <option value="error">Error</option>
                        </select>
                        <p className={`text-secondary${style.dest}`}>Japan</p>
                     </div>
                  </div>
                  <div className={style.type}>
                     <ul className={style.mode}>
                        <div className="row mt-4 w-100">
                           <div className="col-6">
                              <li className="one-way">
                                 <input type="radio" id="one" name="type" />
                                 <label htmlFor="one">One Way</label>
                              </li>
                           </div>
                           <div className="col-6">
                              <li className="round-trip">
                                 <input type="radio" id="round" name="type" />
                                 <label htmlFor="round">Round Trip</label>
                              </li>
                           </div>
                        </div>
                     </ul>
                  </div>
                  <div className="search-departure mt-4 text-secondary">
                     <div>Departure</div>
                     <div className={style.date}>
                        <input
                           type="date"
                           className="form-control"
                           name=""
                           id=""
                           min={new Date().toISOString().split('T')[0]}
                        />
                     </div>
                  </div>
                  <div className="search-person mt-4 text-secondary">
                     <div>How many person?</div>
                     <div className={`mt-1 ${style.select}`}>
                        <select className="form-check mb-3">
                           <option value="null" disabled="disabled" selected>
                              Child
                           </option>
                           <option value="1">1 Child</option>
                           <option value="2">2 Child</option>
                           <option value="3">3 Child</option>
                           <option value="4">4 Child</option>
                           <option value="5">5 Child</option>
                           <option value="6">6 Child</option>
                           <option value="7">7 Child</option>
                           <option value="8">8 Child</option>
                           <option value="9">9 Child</option>
                           <option value="10">10 Child</option>
                        </select>
                        <select className="form-check mb-3">
                           <option value="null" disabled="disabled" selected>
                              Adult
                           </option>
                           <option value="1">1 Adult</option>
                           <option value="2">2 Adult</option>
                           <option value="3">3 Adult</option>
                           <option value="4">4 Adult</option>
                           <option value="5">5 Adult</option>
                           <option value="6">6 Adult</option>
                           <option value="7">7 Adult</option>
                           <option value="8">8 Adult</option>
                           <option value="9">9 Adult</option>
                           <option value="10">10 Adult</option>
                        </select>
                     </div>
                  </div>
                  <div>
                     <div className="search-person mt-4 text-secondary">
                        Which class do you want?
                     </div>
                     <div className={style.radio}>
                        <input type="radio" name="radio" id="radio1" />
                        <label htmlFor="radio1"> Economy</label>
                        <input type="radio" name="radio" id="radio2" />
                        <label htmlFor="radio2"> Business</label>
                        <input type="radio" name="radio" id="radio3" />
                        <label htmlFor="radio3"> First Class</label>
                     </div>
                  </div>
                  <button
                     className={`mt-4 ${style.button}`}
                     onClick={() => router.push('/flight/result')}
                  >
                     Search Flight
                     <Image src={go} alt="" />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default formFlight;
