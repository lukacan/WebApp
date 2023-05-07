
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin
} from "react-icons/ai";
import myImg from "../../visuals/me.png";


function About() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={4} className="myAvatar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <strong className="blue"> INTRODUCE </strong> MYSELF
                        </h1>
                        <p className="home-about-body">
                            Looking to secure the future through cutting-edge technology, I am a&nbsp;
                            <i>
                                <strong className="blue">Solana Auditor and Developer at Ackee Blockchain
                                </strong>
                            </i> with a passion for exploring the limitless potential of blockchain
                            <br />
                            <br /> As a graduate of the&nbsp;
                            <i>
                                <strong className="blue">Faculty of Information Technology at the Czech Technical University
                                </strong>
                            </i> and with experience as a&nbsp;
                            <i>
                                <strong className="blue">Malware Analyst at ESET, </strong>
                            </i>I have developed expertise in cybersecurity and software development.
                            <br />
                            <br /> I am pretty fluent in classics like&nbsp;
                            <i>
                                <strong className="blue">C, C++, Python</strong>
                            </i>, and lately, I have been exploring the possibilities of&nbsp;
                            <i>
                                <strong className="blue">Rust.
                                </strong>
                            </i> My research in&nbsp;
                            <i>
                                <strong className="blue">
                                    Network Security at CTU FIT
                                </strong>
                            </i> reflects my commitment to staying ahead of the curve.
                            <br />
                            <br /> I thrive on new challenges and remain dedicated to being at the forefront of the industry. Join me on this journey towards innovation and discover the power of technology to transform our world
                            <br />
                        </p>
                    </Col>

                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/lukacan/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/andrej-lukacovic-bb177919b/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillLinkedin />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/tady.orel.prepinam/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}


export default About;
