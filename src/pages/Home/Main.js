import React, { Component } from 'react'

//import images
import chatapp from '../../assets/images/chatapp.svg';
import bg from '../../assets/images/bg.svg';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <section style={{ background: `url(${bg}) top `}}>
                    
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <img src={chatapp} className="img-fluid" alt="" />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Connecting People with Web3</h4>
                                <p className="text-dark">You Dictate the Rules</p>
                                <ul className="list-unstyled text-dark">
                                    <li className="mb-0"><span className="text-success h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Add <span className='text-success'>friends</span></li>
                                    <li className="mb-0"><span className="text-success h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Send <span className='text-success'>Messages</span> and <span className='text-success'>Crypto Currencies</span></li>
                                    <li className="mb-0"><span className="text-success h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Trade <span className='text-success'>NFTs</span></li>
                                    <li className="mb-0"><span className="text-success h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Build <span className='text-success'>Communities</span></li>

                                </ul>
                                <Link to="#" className="mt-3 h6 btn btn-success btn-pills">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={7} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title me-lg-5">
                                <h4 className="title mb-4">WHY quilt</h4>
                                <ul className="list-unstyled text-dark">
                                    <li className="mb-0"><span className="text-success h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>You <span className='text-success'>Own</span> and <span className='text-success'>Control</span> Your <span className='text-success'>Data</span></li>
                                    <li className="mb-0"><span className="text-success h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>We are Built on Blockchain Technology</li>
                                    <li className="mb-0"><span className="text-success h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>We Are Built Using <span className='text-success'></span>End to <span className='text-success'></span>End Encryption </li>
                                    <li className="mb-0"><span className="text-success h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>We Support NFT Trades, Crypto Transactions, and Community Building</li>

                                </ul>
                                <Link to="#" className="mt-3 h6 btn btn-success btn-pills">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>

                        <Col lg={5} md={6} className="order-1 order-md-2">
                            <img src={chatapp} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
                </section>

            </React.Fragment>
        )
    }
}
