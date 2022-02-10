    import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import bg from '../../assets/images/crypto/bg.svg';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home d-flex align-items-center"
                style={{ background: `url(${bg}) top ` }}
                >
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="title-heading text-center">
                            <h4 className="heading fw-bold text-white title-dark mb-3">Quilt is <span>secure</span> social trading and <span>messing</span> application, built on blockchain</h4>
                            <h5 className="para-desc mx-auto text-light title-dark">The Future of Social Media in your hands</h5>
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Sign Up</Link>
                                <Link to="#" className="btn btn-outline">Sign In</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        )
    }
}