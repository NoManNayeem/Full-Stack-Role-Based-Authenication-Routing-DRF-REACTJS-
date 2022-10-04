import { Navbar, Nav, Container, NavDropdown, Card } from 'react-bootstrap';
import { toast } from "react-toastify";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
  
import Image from "react-bootstrap/Image";
  


const AdminNavBar = () => {
    // off canvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // off canvas
    
  
    // Log Out User
  function handleLogout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
    toast.success("Log Out Successful!")
    }
    // Log Out User

    // Get Profile Data


    // Get Profile Data





    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav.Link onClick={handleShow} style={{marginRight:"1rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </Nav.Link>
                    <Navbar.Brand href="/">Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        
                        <Nav.Link  onClick={handleLogout}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-power" viewBox="0 0 16 16">
                                <path d="M7.5 1v7h1V1h-1z"/>
                                <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
                            </svg>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas className="text-center" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="mb-3">
                        <Image align="center" width="150" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" roundedCircle />
                        <h2>Nayeem Islam</h2>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Nayeem Islam</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Company</td>
                                <td>Axiata Digital</td>
                            </tr>
                            <tr>
                                <td>Designation</td>
                                <td>Executive</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>08294956693</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>test@test.com</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>Dhaka, Bangladesh</td>
                            </tr>
                            <tr>
                                <td>AC Type</td>
                                <td>Admin</td>
                            </tr>
                        </tbody>
                    </Table>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

};

export default AdminNavBar;
