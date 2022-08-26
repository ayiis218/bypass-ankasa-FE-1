import { useEffect, useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import moment from "moment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import NavbarAdmin from "../../components/organisms/NavbarAdmin";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function Admin() {
	const router = useRouter();
	const [tickets, setTicket] = useState([]);
	const [airlines, setAirlines] = useState([]);
	const [destination, setDestination] = useState([]);
	const [data, setData] = useState({
		airline_id: "",
		origin: "Jakarta",
		destination: "",
		price: "",
		departure: "",
		departure_time: "07:00",
		stock: "",
	});
	const [show, setShow] = useState(false);

	const { auth } = useSelector((state) => state);
	useEffect(() => {
		if (!auth.token & (auth.isImportant === false)) {
			router.replace("/admin/login");
		}
	});

	useEffect(() => {
		axios
			.get(`https://bypass-ankasa-backend.herokuapp.com/tickets/all/detail`)
			.then((res) => {
				setTicket(res?.data?.data);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(`https://bypass-ankasa-backend.herokuapp.com/airlines`)
			.then((res) => {
				setAirlines(res?.data?.data);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(`https://bypass-ankasa-backend.herokuapp.com/destination`)
			.then((res) => {
				setDestination(res?.data?.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleAddTicket = (e) => {
		e.preventDefault();
		setTicket([]);
		axios.post(`https://bypass-ankasa-backend.herokuapp.com/tickets`, data).then((res) => {
			setTicket(res?.data?.data);
			Swal.fire({
				icon: "success",
				title: "Ticket berhasil ditambah",
				showConfirmButton: false,
				timer: 1500,
			});
			setShow(false);
		});
	};

	return (
		<>
			<NavbarAdmin />
			<div className="container">
				<div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
					<Button variant="primary" onClick={handleShow}>
						Add Ticket
					</Button>
				</div>

				<Modal show={show} onHide={handleClose}>
					<form onSubmit={handleAddTicket}>
						<Modal.Header closeButton>
							<Modal.Title>Add Ticket</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{/* Input add ticket */}

							<div className="mb-3">
								<label className="form-label">Airlines</label>

								<select className="form-select" aria-label="Default select example" onChange={(e) => setData({ ...data, airline_id: parseInt(e.target.value) })} required>
									<option selected>Open this select menu</option>
									{airlines.length
										? airlines?.map((item) => {
												return (
													<>
														<option value={item?.airline_id}>
															{item?.airline_code}: {item?.airline_name}-{item?.class_category.charAt(0).toUpperCase() + item?.class_category.slice(1)}
														</option>
													</>
												);
										  })
										: null}
								</select>
							</div>

							<div className="mb-3">
								<label className="form-label">Origin</label>
								<input type="text" className="form-control" id="exampleInputEmail1" placeholder="Origin" value={data?.origin} onChange={(e) => setData({ ...data, origin: e.target.value })} disabled />
							</div>

							<div className="mb-3">
								<label className="form-label">Destination</label>
								<select className="form-select" required aria-label="Default select example" onChange={(e) => setData({ ...data, destination: e.target.value })}>
									<option selected>Open this select menu</option>
									{destination.length
										? destination?.map((item) => {
												return (
													<>
														<option key={item?.destination_id} value={item?.city}>
															{item?.country}: {item?.city}-{item?.airport_name}
														</option>
													</>
												);
										  })
										: null}
								</select>
							</div>

							<div className="mb-3">
								<label className="form-label">Price</label>
								<input
									type="text"
									className="form-control"
									required
									id="exampleInputEmail1"
									placeholder="Rp. 800.000"
									value={data?.price}
									onChange={(e) => setData({ ...data, price: e.target.value })}
									autoComplete="off"
								/>
							</div>

							<div className="mb-3">
								<label className="form-label">Departure</label>
								<div>
									<input type="date" className="form-control" required name="" id="" min={new Date().toISOString().split("T")[0]} onChange={(e) => setData({ ...data, departure: e.target.value })} />
								</div>
							</div>

							<div className="mb-3">
								<label className="form-label">Time</label>
								<input
									type="time"
									className="form-control"
									placeholder="07:00"
									required
									onChange={(e) => {
										setData({ ...data, departure_time: e.target.value });
									}}
									value={data?.departure_time}
								/>
							</div>

							<div className="mb-3">
								<label className="form-label">Stock</label>
								<input type="number" className="form-control" required min={0} max={200} placeholder="Stock" onChange={(e) => setData({ ...data, stock: e.target.value })} />
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" type="submit">
								Save Changes
							</Button>
						</Modal.Footer>
					</form>
				</Modal>

				<div className="row">
					<table className="table table-hover">
						<thead>
							<tr className="table-primary">
								<th scope="col">No</th>
								<th scope="col">Code</th>
								<th scope="col">Airline</th>
								<th scope="col">Class</th>
								<th scope="col">Origin</th>
								<th scope="col">Destination</th>
								<th scope="col">Date</th>
								<th scope="col">Time</th>
								<th scope="col">Price</th>
								<th scope="col">Stock</th>
							</tr>
						</thead>
						<tbody>
							{tickets?.length ? (
								tickets?.map((item, index) => {
									const formater = new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "IDR",
									});

									const currency = formater.format(item?.price);
									return (
										<>
											<tr>
												<th scope="row">{index + 1}</th>
												<td>{item?.airline_code}</td>
												<td>{item?.airline_name}</td>
												<td>{item?.class_category}</td>
												<td>{item?.origin}</td>
												<td>{item?.destination}</td>
												<td>{moment(item?.departure).format("YYYY-MM-DD")}</td>
												<td>{moment(item?.departure_time, "HH:mm").format("HH:mm")}</td>
												<td>{currency}</td>
												<td>{item?.stock}</td>
											</tr>
										</>
									);
								})
							) : (
								<>
									<tr>
										<td colSpan={10}>
											<Stack spacing={1}>
												<Skeleton variant="rectangular" width={"100%"} height={60} />
											</Stack>
										</td>
									</tr>
								</>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default Admin;
