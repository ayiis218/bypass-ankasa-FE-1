/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import flight from "../../public/icons/flight.svg";
import back from "../../public/icons/btnback.svg";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import style from "./style/detail.module.css";
import FacilitiesComp from "./facilitiesComp";
import axios from "axios";
import Swal from "sweetalert2";
import { database } from "../../firebase";
import { ref, set } from "firebase/database";

const formFlight = ({ data, childCount, adultCount, userInfo }) => {
	const router = useRouter();
	const store = useSelector((state) => state);
	const auth = store?.auth?.token;
	const [isloading, setIsLoading] = useState(false);

	const notification = (data, item) => {
		const starCountRef = ref(database, `notification/${userInfo?.user_id}/${new Date().getTime()}`);
		set(starCountRef, {
			booking_id: data?.booking_id,
			createAt: new Date().getTime(),
			isRead: false,
			message: `Tiket dengan tujuan ${item?.origin} - ${item?.destination} berhasil di booking. Mohon lakukan pembayaran segera!`,
			ticket_status: data?.ticket_status,
		});
	};

	const handleBooking = (e, item) => {
		e.preventDefault();
		setIsLoading(true);
		const body = {
			airline_id: data[0]?.airline_id,
			user_id: userInfo?.user_id,
			ticket_id: data[0]?.ticket_id,
			total_price: totalPrice(),
			child: parseInt(childCount),
			adult: parseInt(adultCount),
		};

		if (auth === null) {
			Swal.fire({
				icon: "info",
				showCancelButton: true,
				cancelButtonText: "later",
				cancelButtonColor: "#D3D4D5",
				confirmButtonText: "Login now",
				confirmButtonColor: "#2495FF",
				text: "You have to login first",
			}).then((result) => (result.isConfirmed ? router.push("/login") : null));
			setIsLoading(false);
		} else {
			axios
				.post(`https://bypass-ankasa-backend.herokuapp.com/booking`, body)
				.then((res) => {
					const booking = res?.data?.data[0];
					notification(booking, item);
					Swal.fire({
						icon: "success",
						text: "Booking success, please make payment before 24 hours from now, thanks",
					}).then((result) => (result.isConfirmed ? router.push("/") : null));
					setIsLoading(false);
				})
				.catch((err) => {
					Swal.fire({
						icon: "failed",
						text: "Booking failed",
					});
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	};

	const totalPrice = () => {
		const childPrice = (data[0]?.price / 2) * childCount;
		const adultPrice = data[0]?.price * adultCount;
		return childPrice + adultPrice;
	};

	/*   console.log("user login", userInfo);
  console.log("data", data); */

	return (
		<div className={style.section}>
			<div className="container">
				<div className="row">
					<div className={style.header}>
						<div className={`ms-2 mt-4 ${style.icon}`}>
							<Image src={back} alt="Back" onClick={() => router.back()} />
						</div>
					</div>
					{data?.map((item, index) => (
						<>
							<div key={index} className={style.container}>
								<div className={style.content}>
									<div className={style.result}>
										<div className="row mt-3 ms-2">
											<div className="col-4">
												<div className={style.city}>
													<h2 className={style.city}>{item.origin}</h2>
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
													<h2 className={style.city}>{item.destination}</h2>
													<h6>15.21</h6>
												</div>
											</div>
										</div>
										<div className="row ms-2 mt-3">
											<div className="col-6">
												<Image src={item.airline_image} alt="" height={80} width={100} />
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
															<p>{childCount}</p>
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
															<p>{adultCount}</p>
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
										<FacilitiesComp facilities={item.facilities} />
									</div>

									<div>
										<div className=" mt-3 text-secondary">
											<div className="row mt-5">
												<div className="col-6">
													<h6>Total you pay</h6>
												</div>
												<div className="col-6">
													<div className="ms-5">
														<h6
															style={{
																color: "#2395FF",
																fontSize: "24px",
																fontWeight: "500",
															}}
														>
															$ {totalPrice()}
														</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
									<button className={style.button} onClick={(e) => handleBooking(e, item)} disabled={isloading}>
										{isloading ? "loading..." : "BOOK FLIGHT"}
									</button>
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default formFlight;
