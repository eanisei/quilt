import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label, Button } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";


//Import Images
import logolight from "../../assets/images/crypto/Quilt.svg";
import logodark from "../../assets/images/crypto/Quilt.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "About us", link: "/page-aboutus" },
        { title: "Services", link: "/page-services" },
        { title: "Team", link: "/page-team" },
        { title: "Pricing", link: "/page-pricing" },
        { title: "Project", link: "/page-work" },
        { title: "Careers", link: "/page-jobs" },
        { title: "Blog", link: "/page-blog" },
        { title: "Login", link: "/page-cover-login" },
      ],
      grid2: [
        { title: "Terms of Services", link: "/page-terms" },
        { title: "Privacy Policy", link: "/page-privacy" },
        { title: "Documentation", link: "/documentation" },
        { title: "Changelog", link: "/changelog" },
        { title: "Components", link: "/components" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
          <Container>
            <Row>
              <Col
                lg="6"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Sign up for the Updates
                </h5>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                We'll send you fresh news about our platform, including new features and opportunities for the community.
                </p>

                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                </ul>
              </Col>

  

              <Col
                lg="6"
                md="6"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
<div className="subcribe-form mt-4">
                                    <Form>
                                        <div className="mb-2">
                                            <Input type="email" id="email" name="email" className="rounded-pill" placeholder="E-mail :" />
                                            <Button type="submit" className="btn btn-pills btn-success">Subscribe</Button>
                                        </div>
                                    </Form>
                                </div>
                
              </Col>
            </Row>
            <Row>    
            <Col
                lg="6"
                md="6"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
               
               <Link to="#" className="logo-footer">
                  <img
                    src={this.props.isLight ? logodark : logolight}
                    height="24"
                    alt=""
                  />
                </Link> 

              </Col>     
                 <Col
                lg="3"
                md="3"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  App
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="3"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Navigation
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              </Row>
          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="8">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © 2022 quilt.
                  </p>
                </div>
              </Col>

            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
