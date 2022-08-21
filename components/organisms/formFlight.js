import React, { useEffect, useState } from "react";
import Image from "next/image";
import back from "../../public/icons/btnback.svg";
import full from "../../public/icons/fullScreen.svg";
import style from "./style/flight.module.css";
import { MdOutlineSwapHoriz } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import NoDataComp from "./noDataComp";
import Swal from "sweetalert2";

const formFlight = (props) => {
  const { inititateDestination } = props;
  const { destinationList } = props;
  const [origin, setOrigin] = useState("Jakarta");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [classCategory, setClassCategory] = useState("");
  const [childCount, setChildCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const router = useRouter();

  const handleSearchFlight = (e) => {
    e.preventDefault();
    const body = {
      origin,
      destination,
      departure,
      class_category: classCategory,
      child: childCount,
      adult: adultCount,
    };

    if (destination === "") {
      return (destination = inititateDestination?.city);
    }

    if (departure === "") {
      Swal.fire({
        icon: "warning",
        text: "Please insert date of departure flight",
      });
    } else if (childCount == 0 && adultCount == 0) {
      Swal.fire({
        icon: "warning",
        text: "Please insert total child and adult",
      });
    } else if (classCategory === "") {
      Swal.fire({
        icon: "warning",
        text: "Please insert class category",
      });
    } else {
      router.push(
        `/search-result?origin=${body.origin}&destination=${body.destination}&departure=${body.departure}&class_category=${body.class_category}&child=${body.child}&adult=${body.adult}`
      );
    }
  };

  console.log("inititateDestination", inititateDestination);

  const renderJsx = () => {
    if (!inititateDestination?.destination_id) {
      return <NoDataComp />;
    } else {
      return (
        <>
          <div className={style.section}>
            <div className="container">
              <div className="row">
                <div className={style.header}>
                  <div className="row">
                    <Image
                      className={style.img}
                      src={inititateDestination?.destination_image}
                      alt="destinasi"
                      height={290}
                      width={470}
                    ></Image>
                    <div className={`row ms-2 ${style.icon}`}>
                      <div className="col-6 mt-4">
                        <Link href={"/"} passHref>
                          <Image className={style.back} src={back} alt="Back" />
                        </Link>
                      </div>
                      <div className="col-6 mt-3 d-flex justify-content-end">
                        <Image className={style.full} src={full} alt="full" />
                      </div>
                    </div>
                    <div className={style.title}>
                      <h3>Destinations</h3>
                    </div>
                  </div>
                </div>
                <div className={style.container}>
                  <form onSubmit={handleSearchFlight}>
                    <div className={style.content}>
                      <div className={style.box}>
                        <div className="row align-items-center">
                          <div className="col-5">
                            <p>from</p>
                            <select
                              className="font-weight-bold shadow-none form-control w-auto"
                              name="deptCity"
                              style={{ border: "none", paddingLeft: "0px" }}
                              onChange={(e) => {
                                const selectedOrigin = e.target.value;
                                setOrigin(selectedOrigin);
                              }}
                            >
                              <option selected value="Jakarta">
                                Jakarta
                              </option>
                              {destinationList?.map((item, index) => (
                                <option key={index} value={item.city}>
                                  {item.city}
                                </option>
                              ))}
                            </select>
                            <span className="text-secondary">Indonesia</span>
                          </div>
                          <div className="col-2 text-center">
                            <MdOutlineSwapHoriz size={25} color="#2395FF" />
                          </div>
                          <div className="col-5 text-end">
                            <p>to</p>
                            <select
                              className="font-weight-bold shadow-none form-control w-auto"
                              name="deptCity"
                              style={{ border: "none" }}
                              onChange={(e) => {
                                const selectedDestination = e.target.value;
                                setDestination(selectedDestination);
                              }}
                            >
                              <option selected>
                                {inititateDestination?.city}
                              </option>
                              {destinationList?.map((item, index) => (
                                <option key={index} value={item.city}>
                                  {item.city}
                                </option>
                              ))}
                            </select>
                            <span className="text-secondary">Indonesia</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.type}>
                      <ul className={style.mode}>
                        <div className="row mt-4 w-100">
                          <div className="col-6">
                            <li className="one-way">
                              <input
                                type="radio"
                                id="one"
                                checked
                                name="type"
                              />
                              <label htmlFor="one">One Way</label>
                            </li>
                          </div>
                          <div className="col-6">
                            <li className="round-trip">
                              <input
                                type="radio"
                                id="round"
                                disabled
                                name="type"
                              />
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
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setDeparture(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="search-person mt-4 text-secondary">
                      <div>How many person?</div>
                      <div className={`mt-1 ${style.select}`}>
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                          onChange={(e) => setChildCount(e.target.value)}
                        >
                          <option disabled selected>
                            Child
                          </option>
                          <option value={1}>1 Child</option>
                          <option value={2}>2 Child</option>
                          <option value={3}>3 Child</option>
                          <option value={4}>4 Child</option>
                        </select>
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                          onChange={(e) => setAdultCount(e.target.value)}
                        >
                          <option disabled selected>
                            Adult
                          </option>
                          <option value={1}>1 Adult</option>
                          <option value={2}>2 Adult</option>
                          <option value={3}>3 Adult</option>
                          <option value={4}>4 Adult</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-5 text-secondary">
                      <div>Which class do you want?</div>
                      <div className={style.radio}>
                        <div>
                          <input
                            type="radio"
                            name="radio"
                            value="economy"
                            id="radio1"
                            onChange={(e) => setClassCategory(e.target.value)}
                          />
                          <label htmlFor="radio1"> Economy</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="radio"
                            value="business"
                            id="radio2"
                            onChange={(e) => setClassCategory(e.target.value)}
                          />
                          <label htmlFor="radio2"> Business</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="radio"
                            value="first-class"
                            id="radio3"
                            onChange={(e) => setClassCategory(e.target.value)}
                          />
                          <label htmlFor="radio3"> First Class</label>
                        </div>
                      </div>
                    </div>
                    <button className={`mt-4 ${style.button}`} type="submit">
                      Search Flight
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <>{renderJsx()}</>;
};

export default formFlight;
