/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import moment from "moment";

import airAsia from "../../public/images/airAsia.svg";
import Default from "../../public/images/garuda.svg";
import flight from "../../public/icons/flight.svg";
import arrow from "../../public/icons/arrow2.png";
import filter from "../../public/icons/filter.svg";
import back from "../../public/icons/btnback.svg";

import style from "./style/result.module.css";

const SearchResult = () => {
	return (
		<div className={style.section}>
			<div className="container">
				<div className="row">
					<div className={style.header}>
						<div className="row mt-3 m-2">
							<div className="col-6 d-flex justify-content-start">
								<Image src={back} alt="Back" />
							</div>
							<div className="col-6 d-flex justify-content-end">
								<input type="date" className="form-control" name="" min={new Date().toISOString().split("T")[0]} />
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
										<option value="">Medan</option>
										<option value="loading">Loading</option>
										<option value="error">Error</option>
									</select>
									<h6 className="ms-1 mt-1">Indonesia</h6>
								</div>
								<div className="col-2 ms-5">
									<Image className={style.imagePlane} src={arrow} />
								</div>
								<div className="col-4 ms-3">
									<select name="arrCity" disabled>
										<option value="">Tokyo</option>
										<option value="loading">Loading</option>
										<option value="error">Error</option>
									</select>
									<h6 className="ms-1 mt-1">Japan</h6>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.second}`}>
						<div className="row">
							<div className="col-8 mt-2">
								<small className="ms-3">Passenger</small>
								<h6 className="mt-1 ms-3">2 Child 4 Adult</h6>
							</div>
							<div className="col-4 mt-2">
								<small>Class</small>
								<h6 className="mt-1">Economy</h6>
							</div>
						</div>
					</div>
					<div className={`${style.container}`}>
						<div className="row mt-4">
							<div className={style.mainconten}>
								<h6 className={`text-secondary ${style.ticket}`}>2 flight found</h6>
								<h6 className={style.filter}>Filter</h6>
								<Image className={style.filterImg} src={filter} />
								{/* <i
                           className="fa-solid fa-arrow-up-a-z"
                           style={{ marginRight: '0px' }}
                           onClick={() => {
                              setMode('DESC');
                           }}
                        ></i>
                        <i
                           className="fa-solid fa-arrow-up-z-a"
                           style={{ marginRight: '0px' }}
                           onClick={() => {
                              setMode('ASC');
                           }}
                        ></i> */}
							</div>
							<div className={style.result}>
								<div className="row">
									<div className="col-3 mt-4">
										<Image src={Default} alt="" />
									</div>
									<div className="col-9">
										<div className="row">
											<div className="col-4">
												<div>
													<h2 className={style.departureCity}>IDN</h2>
													<h6>12.33</h6>
												</div>
											</div>
											<div className="col-4 mt-3">
												<Image src={flight} alt="" style={{}} />
											</div>
											<div className="col-4">
												<div>
													<h2 className={style.arrivalCity}>JPN</h2>
													<h6>15.21</h6>
												</div>
											</div>
											<div className="col-8">
												<h6 className="text-secondary">3 hours 11 minutes</h6>
											</div>
											<div className="col-4">
												<h6
													style={{
														color: "#2395FF",
														fontSize: "14px",
														fontWeight: "500",
													}}
												>
													$ 145,00
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className={style.result}>
								<div className="row">
									<div className="col-3 mt-4">
										<Image src={airAsia} alt="" />
									</div>
									<div className="col-9">
										<div className="row">
											<div className="col-4">
												<div>
													<h2 className={style.departureCity}>IDN</h2>
													<h6>12.33</h6>
												</div>
											</div>
											<div className="col-4 mt-3">
												<Image src={flight} alt="" style={{}} />
											</div>
											<div className="col-4">
												<div>
													<h2 className={style.arrivalCity}>JPN</h2>
													<h6>15.21</h6>
												</div>
											</div>
											<div className="col-8">
												<h6 className=" text-secondary">3 hours 11 minutes</h6>
											</div>
											<div className="col-4">
												<h6
													style={{
														color: "#2395FF",
														fontSize: "14px",
														fontWeight: "500",
													}}
												>
													$ 145,00
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
