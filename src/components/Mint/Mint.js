
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin
} from "react-icons/ai";
import myImg from "../../visuals/nft1.png";


function Mint() {
    return (
        <Container fluid className="home-mint-section" id="mint">
            <Container>
                <Row>
                    <Col md={7} className="home-mint-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            <strong className="blue"> COMING SOON !! </strong>
                        </h1>
                        <p className="home-mint-body">
                            You will simply connect your&nbsp;
                            <i>
                                <strong className="blue">Phantom Wallet,
                                </strong>
                            </i>
                            <br />
                            and I will mint you&nbsp;
                            <i>
                                <strong className="blue">NFT.
                                </strong>
                            </i>
                        </p>
                    </Col>
                    <Col md={5} className="myAvatar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}


export default Mint;
