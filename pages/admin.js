import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Admin() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Welcome Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Flights</Nav.Link>
                  <Nav.Link href="#action2">Tickets</Nav.Link>
                  <Nav.Link href="#action2">Approval Payment</Nav.Link>
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
                <th scope="col">Booking Ticket</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>IDN to JPN</td>
                <td>Monday, 20 July ‘20 - 12:33</td>
                <td>Waiting</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{ marginRight: "8px" }}
                  >
                    Approve
                  </button>
                  <button type="button" className="btn btn-danger btn-sm">
                    Cancel
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>IDN to JPN</td>
                <td>Monday, 20 July ‘20 - 12:33</td>
                <td>Waiting</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{ marginRight: "8px" }}
                  >
                    Approve
                  </button>
                  <button type="button" className="btn btn-danger btn-sm">
                    Cancel
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>IDN to JPN</td>
                <td>Monday, 20 July ‘20 - 12:33</td>
                <td>Waiting</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{ marginRight: "8px" }}
                  >
                    Approve
                  </button>
                  <button type="button" className="btn btn-danger btn-sm">
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin;
