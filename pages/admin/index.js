import { useEffect, useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import moment from "moment";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function Admin() {
	const dispatch = useDispatch();
	const router = useRouter();
	const [dataBook, setDataBook] = useState({});
	const [sort, setSort] = useState(false);

	const { auth } = useSelector((state) => state);
	useEffect(() => {
		if (!auth.token & (auth.isImportant === false)) {
			router.replace("/admin/login");
		}
	});

	const getAllData = () => {
		axios
			.get(`https://bypass-ankasa-backend.herokuapp.com/booking/detail`)
			.then((res) => {
				setDataBook(res?.data?.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getAllData();
	}, []);

	const handleSort = () => {
		if (sort) {
			setSort(false);
			getAllData();
		} else {
			setSort(true);
			axios
				.get(`https://bypass-ankasa-backend.herokuapp.com/booking/sorted`)
				.then((res) => {
					setDataBook(res?.data?.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const handleAccept = (event, booking_id) => {
		event.preventDefault();

		Swal.fire({
			title: "Do you want to save the changes?",
			showCancelButton: true,
			confirmButtonText: "Save",
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire("Saved!", "", "success").then(() => {
					axios
						.patch(`https://bypass-ankasa-backend.herokuapp.com/booking/accept/${booking_id}`, {
							ticket_status: "success",
						})
						.then((res) => {
							setDataBook(res?.data?.result);
						})
						.catch((err) => {
							console.log(err);
						});
				});
			}
		});
	};

	const handleCancel = (event, booking_id) => {
		event.preventDefault();

		Swal.fire({
			title: "Do you want to save the changes?",
			showCancelButton: true,
			confirmButtonText: "Save",
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire("Saved!", "", "success").then(() => {
					axios
						.patch(`https://bypass-ankasa-backend.herokuapp.com/booking/accept/${booking_id}`, {
							ticket_status: "failed",
						})
						.then((res) => {
							// console.log(res);
							setDataBook(res?.data?.result);
						})
						.catch((err) => {
							console.log(err);
						});
				});
			}
		});
	};

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<>
			{[false].map((expand) => (
				<Navbar key={expand} bg="light" expand={expand} className="mb-3">
					<Container fluid>
						<Navbar.Brand href="#">Welcome Admin</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Nav.Link href="admin">Approval Payment</Nav.Link>
									{/* <Nav.Link href="admin/flight">Flights</Nav.Link> */}
									<Nav.Link href="admin/tickets">Tickets</Nav.Link>
									<Nav.Link onClick={handleLogout}>Logout</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
			<div className="container">
				<div className="row">
					<table className="table table-hover">
						<thead>
							<tr className="table-primary">
								<th scope="col">No</th>
								<th scope="col">Name</th>
								<th scope="col">Origin</th>
								<th scope="col">Destination</th>
								<th scope="col">Date</th>
								<th scope="col" onClick={handleSort} style={{ cursor: "pointer" }}>
									Status{" "}
									{sort ? (
										<>
											<IoIosArrowDown />
										</>
									) : (
										<>
											<IoIosArrowUp />
										</>
									)}
								</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{dataBook?.length && auth?.isImportant === true ? (
								dataBook?.map((item, index) => (
									<tr key={item?.booking_id}>
										<th scope="row">{index + 1}</th>
										<td>{item?.full_name}</td>
										<td>{item?.origin}</td>
										<td>{item?.destination}</td>
										<td>{moment(item?.departure).format("YYYY-MM-DD")}</td>
										<td>{item?.ticket_status}</td>
										<td>
											<button
												type="button"
												className="btn btn-primary btn-sm"
												style={{ marginRight: "8px" }}
												onClick={(e) => handleAccept(e, item?.booking_id)}
												disabled={item?.ticket_status === "success" ? true : false}
											>
												Approve
											</button>
											<button type="button" className="btn btn-danger btn-sm" onClick={(e) => handleCancel(e, item?.booking_id)}>
												Cancel
											</button>
										</td>
									</tr>
								))
							) : (
								<>
									<tr>
										<td colSpan={7}>
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
