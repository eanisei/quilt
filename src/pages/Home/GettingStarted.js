import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';

import QuiltStep1 from '../../assets/images/Quilt_Steps_S1.svg';
import QuiltStep2 from '../../assets/images/Quilt_Steps_S2.svg';
import QuiltStep3 from '../../assets/images/Quilt_Steps_S3.svg';
import QuiltStep4 from '../../assets/images/Quilt_Steps_S4.svg';



//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

export default class GettingStarted extends Component {
    render() {
        return (
            <React.Fragment>
                    <SectionTitle
                        title="Getting Started"
                    />

                    <Row className="d-flex justify-content-around p-5">
                    <Col lg={3} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                    <img src={QuiltStep1} className="img-fluid" alt="" />
                                    <CardTitle className="title h5 text-dark">Connect your wallet</CardTitle>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                    <img src={QuiltStep3} className="img-fluid" alt="" />
                                    <CardTitle className="title h5 text-dark">Generate privacy keys</CardTitle>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                    <img src={QuiltStep2} className="img-fluid" alt="" />
                                    <CardTitle className="title h5 text-dark">Add friends</CardTitle>
                            </Card>
                        </Col>
            

                        <Col lg={3} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <img src={QuiltStep4} className="img-fluid" alt="" />
                                <CardTitle className="title h5 text-dark">Send Messages</CardTitle>
                            </Card>
                        </Col>

                    </Row>
            </React.Fragment>
        )
    }
}
