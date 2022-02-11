    import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'reactstrap';

import bg from '../../assets/images/crypto/bg.svg';
import quiltApp from '../../assets/images/crypto/quiltApp.svg';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                
                <section className="bg-home d-flex align-items-center" style={{ background: `url(${bg})`}}>
                    
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} xs={12}>
                        <div className="title-heading text-left">
                            <h4 className="heading fw-bold text-dark title-dark mb-3">Quilt is <span className='text-success'>secure</span> social trading and <span className='text-success'>messaging</span> application, built on blockchain</h4>
                            <h5 className="para-desc mx-auto text-success title-dark">The Future of Social Media in your hands</h5>
                            <div className="mt-4 pt-2 px-2 d-flex justify-content-left">
                                <Link to="#" className="btn btn-success btn-pills">Sign Up</Link>
                                <Link to="#" className="btn btn-light btn-pills">Sign In</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="text-md-end text-center ms-lg-4">
                  <img src={quiltApp} className="img-fluid" alt="" />
                </div>
              </Col>
                </Row>
            </Container>
            
        </section>
            </React.Fragment>
        )
    }
}