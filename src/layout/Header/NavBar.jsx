import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="container d-flex justify-content-start fs-6 fw-normal fst-normal p-0" collapseOnSelect expand="false"
                bg="bg" data-bs-theme="light">
            <Navbar.Brand className="me-5 pt-4" href="#home"><img src="/img/logo/logo.png"/></Navbar.Brand>
            <Nav className="d-flex flex-row align-items-center ms-5 gap-6">
                <Nav.Link className="text-primary pt-4" href="#features">ПОДБОР ТУРА</Nav.Link>
                <Nav.Link className="text-primary pt-4" href="#pricing">ГОРЯЩИЕ ТУРЫ</Nav.Link>
                <Nav.Link className="text-primary pt-4" href="#pricing">СТРАНЫ</Nav.Link>
                <Nav.Link className="text-primary pt-4" href="#pricing">ОТЕЛИ</Nav.Link>
                <div className="d-flex align-items-center pt-2">
                    <Nav.Link className="button-application text-primary border rounded-pill px-5 py-3 fw-medium border-1 border-submit"
                              href="/">ОСТАВИТЬ ЗАЯВКУ</Nav.Link>
                    <Nav.Link className="tel-icon" href=""><img src="/img/icons/call.png"/></Nav.Link>
                    <Nav.Link className="location-icon pe-3 ps-3 border-end" href=""><img src="/img/icons/location.png"/></Nav.Link>
                    <Navbar.Toggle className="burger border-0 bx-shadow-0" aria-controls="responsive-navbar-nav"/>
                </div>
            </Nav>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto text-primary">
                    <Nav.Link href="#pricing">ОТЕЛИ</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )


}

export default NavBar;