import React, { Component } from 'react'

//import images
import chatapp from '../../assets/images/crypto/chatapp.svg';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <img src={chatapp} className="img-fluid" alt="" />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Connecting People with Web3</h4>
                                <p className="text-muted">You Dictate the Rules</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Add friends</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Send <span>Messages</span> and <span>Crypto Currencies</span></li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Trade <span>NFTs</span></li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Build <span>Communities</span></li>

                                </ul>
                                <Link to="#" className="mt-3 h6 btn btn-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={7} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title me-lg-5">
                                <h4 className="title mb-4">WHY quilt</h4>
                                <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>You <span>Own</span> and <span>Control</span> Your <span>Data</span></li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>We are Built on Blockchain Technology</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>We Are Built Using End to End Encryption </li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>We Support NFT Trades, Crypto Transactions, and Community Building</li>

                                </ul>
                                <Link to="#" className="mt-3 h6 btn btn-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>

                        <Col lg={5} md={6} className="order-1 order-md-2">
                            <img src={chatapp} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
