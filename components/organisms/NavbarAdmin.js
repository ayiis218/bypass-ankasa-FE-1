import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

function NavbarAdmin() {
	const dispatch = useDispatch();

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
		</>
	);
}

export default NavbarAdmin;
