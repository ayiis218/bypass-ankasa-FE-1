/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// import Zoom from 'next-image-zoom';
import back from "../../public/icons/btnback.svg";
import arrow from "../../public/icons/arrow.svg";
import go from "../../public/icons/white-arrow.svg";
import full from "../../public/icons/fullScreen.svg";
import Default from "../../public/img/bali.png";
import style from "./style/flight.module.css";

const formFlight = () => {
	const router = useRouter();
	/*    const [deptCity, setDeptCity] = useState('');
   const [arrCity, setArrCity] = useState(''); */
	return (
		<div className={style.section}>
			<div className="container">
				<div className="row">
					<div className={style.header}>
						<div className="row">
							<Image className={style.img} src={Default} alt="destinasi" height={290} width={470}></Image>
							<div className={`row ms-2 ${style.icon}`}>
								<div className="col-6 mt-4">
									<Image className={style.back} src={back} alt="Back" />
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
						<div className={style.content}>
							<div className={style.box}>
								<div className="text-secondary">From</div>
								<select
									className="font-weight-bold form-control w-auto"
									name="deptCity"
									style={{ border: "none" }}
									// value={deptCity}
								>
									<option value="">Medan</option>
									<option value="loading">Loading</option>
									<option value="error">Error</option>
								</select>
								<p className={`text-secondary${style.dest}`}>Indonesia</p>
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
									style={{ border: "none" }}
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
								<input type="date" className="form-control" name="" id="" min={new Date().toISOString().split("T")[0]} />
							</div>
						</div>
						<div className="search-person mt-4 text-secondary">
							<div>How many person?</div>
							<div className={`mt-1 ${style.select}`}>
								<select className="form-check">
									<option value="null" disabled="disabled" selected>
										Child
									</option>
									<option value="1">1 Child</option>
									<option value="2">2 Child</option>
									<option value="3">3 Child</option>
									<option value="4">4 Child</option>
								</select>
								<select className="form-check">
									<option value="null" disabled="disabled" selected>
										Adult
									</option>
									<option value="1">1 Adult</option>
									<option value="2">2 Adult</option>
									<option value="3">3 Adult</option>
									<option value="4">4 Adult</option>
								</select>
							</div>
						</div>
						<div className="mt-5 text-secondary">
							<div>Which class do you want?</div>
							<div className={style.radio}>
								<div>
									<input type="radio" name="radio" id="radio1" />
									<label htmlFor="radio1"> Economy</label>
								</div>
								<div>
									<input type="radio" name="radio" id="radio2" />
									<label htmlFor="radio2"> Business</label>
								</div>
								<div>
									<input type="radio" name="radio" id="radio3" />
									<label htmlFor="radio3"> First Class</label>
								</div>
							</div>
						</div>
						<button className={`mt-4 ${style.button}`} onClick={() => router.push("/result")}>
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
