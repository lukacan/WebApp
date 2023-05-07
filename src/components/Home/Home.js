import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./TypeWriter";
import About from "../About/About.js"

function Home() {
    return (
        <section>
            <Particle />

            <Container fluid className="home-section" id="home">

                <Container className="home-content">
                    <Row md={8} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hi There!{" "}
                        </h1>
                        <h1 className="heading-name">
                            I'm
                            <strong className="main-name"> Andrej Lukačovič</strong>
                        </h1>

                        <div style={{ padding: 50, textAlign: "left" }}>
                            <Type />
                        </div>

                    </Row>
                </Container>
            </Container>
            <About />
        </section >
    );
}

export default Home;
