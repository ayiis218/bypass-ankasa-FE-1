import React from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Default from "../../public/images/garuda.svg";
import flight from "../../public/icons/flight.svg";
import arrow from "../../public/icons/arrow2.png";
import back from "../../public/icons/btnback.svg";
import logoNotFound from "../../assets/illustration.png";

import style from "./style/result.module.css";
import Link from "next/link";

const SearchResult = ({
  data,
  origin,
  destination,
  class_category,
  departure,
  child,
  adult,
}) => {
  return (
    <div className={style.section}>
      <div className="container">
        <div className="row">
          <div className={style.header}>
            <div className="row mt-3 m-2">
              <div className="col-6 d-flex justify-content-start">
                <Link href={`/search-flight/${destination}`} passHref>
                  <Image src={back} alt="Back" />
                </Link>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <input
                  type="date"
                  className="form-control"
                  name=""
                  value={departure}
                />
              </div>
            </div>
            <div className="row mt-5 m-2">
              <div className={style.main}>
                <p className="ms-1 me-auto">From</p>
                <p className="me-3 ms-auto">To</p>
              </div>
              <div className={style.select}>
                <div className="col-4">
                  <select name="deptCity" disabled>
                    <option value="">{origin}</option>
                    <option value="loading">Loading</option>
                    <option value="error">Error</option>
                  </select>
                  <h6 className="ms-1 mt-1">Indonesia</h6>
                </div>
                <div className="col-2 ms-5">
                  <Image className={style.imagePlane} src={arrow} alt="" />
                </div>
                <div className="col-4 ms-3">
                  <select name="arrCity" disabled>
                    <option value="">{destination}</option>
                    <option value="loading">Loading</option>
                    <option value="error">Error</option>
                  </select>
                  <h6 className="ms-1 mt-1">Indonesia</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.second}`}>
            <div className="row">
              <div className="col-8 mt-2">
                <small className="ms-3">Passenger</small>
                <h6 className="mt-1 ms-3">
                  {child} Child {adult} Adult
                </h6>
              </div>
              <div className="col-4 mt-2">
                <small>Class</small>
                <h6 className="mt-1">{class_category}</h6>
              </div>
            </div>
          </div>
          <div className={`${style.container}`}>
            <div className="row mt-4">
              <div className={style.mainconten}>
                <h6 className={`text-secondary ${style.ticket}`}>
                  {data?.length} flight found
                </h6>
              </div>
              {!data?.length ? (
                <>
                  <div className="row justify-content-center mt-3">
                    <div className="col-7 text-center">
                      <Image
                        src={logoNotFound}
                        height={500}
                        width={500}
                        alt="logo not found"
                      />
                      <p className="text-secondary">
                        Sorry, there is no flight schedule that you are looking
                        for
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                data.map((item, index) => (
                  <>
                    <Link
                      href={`/detail-flight?id=${item.ticket_id}&child=${child}&adult=${adult}`}
                      passHref
                    >
                      <div className={style.result} key={index}>
                        <div className="row">
                          <div className="col-3 mt-4">
                            <Image
                              src={item.airline_image}
                              height={100}
                              width={150}
                              alt=""
                            />
                          </div>
                          <div className="col-9">
                            <div className="row">
                              <div className="col-4">
                                <div>
                                  <h2 className={style.departureCity}>
                                    {item.origin}
                                  </h2>
                                </div>
                              </div>
                              <div className="col-3 mt-3">
                                <div className="ms-3">
                                  <Image src={flight} alt="" style={{}} />
                                </div>
                              </div>
                              <div className="col-5">
                                <div className="ms-1">
                                  <h2 className={style.arrivalCity}>
                                    {item.destination}
                                  </h2>
                                </div>
                              </div>
                              <div className="col-8">
                                <h6 className="text-secondary">
                                  {moment(item.departure).format("YYYY-MM-DD")}
                                </h6>
                              </div>
                              <div className="col-4">
                                <h6
                                  style={{
                                    color: "#2395FF",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Rp. {item.price}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
