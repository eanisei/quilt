import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

export default class GettingStarted extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <SectionTitle
                        title="Getting Started"
                    />

                    <Row className="justify-content-center">
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-success text-center mx-auto">
                                    <i className="uil uil-comment-lock d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Add friends</Link>
                                    <p className="text-muted mt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et.</p>
                                    <i className="uil uil-comment-lock text-success full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-success text-center mx-auto">
                                    <i className="uil uil-key-skeleton d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Get privacy key</Link>
                                    <p className="text-muted mt-2">Mauris dictum facilisis augue. Phasellus faucibus molestie nisl. Morbi imperdiet, mauris ac auctor dictum.</p>
                                    <i className="uil uil-key-skeleton text-success full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-success text-center mx-auto">
                                    <i className="uil uil-cloud-times d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">E2E encryption</Link>
                                    <p className="text-muted mt-2">Fusce wisi. In dapibus augue non sapien. Suspendisse sagittis ultrices augue. Etiam commodo dui eget wisi.</p>
                                    <i className="uil uil-cloud-times text-success full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
