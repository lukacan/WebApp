import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import {
    AiOutlineHome,
    AiOutlineUser,
} from "react-icons/ai";


function NavBar() {
    const scrollToSec = (elementId) => {
        const element = document.getElementById(elementId);
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <Navbar fixed="top" expand="md">
            <Container>
                <Nav className="ms-auto" defaultActiveKey="#home">
                    <Nav.Item>
                        <Nav.Link onClick={() => scrollToSec("home")}>
                            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => scrollToSec("about")}>
                            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
