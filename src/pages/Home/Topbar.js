import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./scrollSpy";

import Quilt from "../../assets/images/Quilt.svg";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "about", navheading: "About" },
        { id: 2, idnm: "roadmap", navheading: "Roadmap" },
        { id: 3, idnm: "team", navheading: "Team" },
      ],
      isOpen: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    let targetId = this.state.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <Link className="logo" to="/">
              <img src={Quilt} height="24" alt="" />
            </Link>
            <div className="buy-button">
              <a
                href="https://quilt.chat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-pills"
              >
                Launch App
              </a>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="800"
              headerBackground="false"
              activeNavClass="active"
            >
              <div
                id="navigation"
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul className="navigation-menu">
                  {this.state.navItems.map((item, key) => (
                    <li key={key} className="has-submenu">
                      <a href={"#" + item.idnm}> {item.navheading}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollspyNav>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default Topbar;
