import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  Container,
  Modal,
  ModalBody,
} from "reactstrap";

//Import images
import logodark from "../../assets/images/crypto/Quilt.svg";
import logolight from "../../assets/images/crypto/Quilt.svg";
import NavbarButtons from "../Shared/NavbarButtons";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpenShop: false,
      navLinks: [
        //Note : each child and nested child must have unique id
        { id: 1, title: "Home", link: "/" },
        {
          id: 2,
          title: "About",
          link: "/",
          isOpenSubMenu: false,
        },
        {
          id: 3,
          title: "Team",
          link: "/",
          isOpenSubMenu: false,
          child: [
            { title: "Documentations", link: "/" },
            { title: "Changelog", link: "/" },
            { title: "Components", link: "/" },
            { title: "Widget", link: "/" },
          ],
        },
      ],
      wishlistModal: false,
      dropdownIsOpen: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
    this.openBlock.bind(this);
    this.openNestedBlock.bind(this);
    this.toggleDropdownShop.bind(this);
    this.toggleWishlistModal.bind(this);
    this.toggleDropdownIsOpen.bind(this);
  }

  toggleWishlistModal = () => {
    this.setState((prevState) => ({
      wishlistModal: !prevState.wishlistModal,
    }));
  };

  toggleDropdownShop = () => {
    this.setState({
      dropdownOpenShop: !this.state.dropdownOpenShop,
    });
  };
  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  openBlock = (level2_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? (tmpLink.isOpenSubMenu = !tmpLink.isOpenSubMenu)
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  openNestedBlock = (level2_id, level3_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? tmpLink.child.map((tmpchild) =>
          //if level1 id is matched then match level 3 id
          tmpchild.id === level3_id
            ? //if id is matched then update status(level 3 sub menu will be open)
            (tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu)
            : (tmpchild.isOpenNestedSubMenu = false)
        )
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.tagline ? this.props.tagline : null}

        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <div>

              {this.props.hasDarkTopBar ? (
                <a className="logo" href="index.html">
                  <img src={logodark} height="24" className="logo-light-mode" alt="" />
                  <img src={logolight} height="24" className="logo-dark-mode" alt="" />
                </a>
              ) :
                <a className="logo" href="index.html">
                  <span className="logo-light-mode">
                    <img src={logodark} className="l-dark" height="24" alt="" />
                    <img src={logolight} className="l-light" height="24" alt="" />
                  </span>
                  <img src={logolight} height="24" className="logo-dark-mode" alt="" />
                </a>
              }
            </div>
        
                  <div className="buy-button">
                    <Link
                      to="https://quilt.chat"
                      target="_blank"
                      id="buyButton"
                      className="btn btn-success btn-pills"
                    >
                      Launch App
                    </Link>
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

            <div
              id="navigation"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul className="navigation-menu" id="top-menu">
                {this.state.navLinks.map((navLink, key) =>
                  navLink.child ? (
                    <li className="has-submenu" key={key}>
                      {/* child item(menu Item) - Level 1 */}
                      <Link
                        to={navLink.link}
                        onClick={(event) => {
                          event.preventDefault();
                          this.openBlock(navLink.id);
                        }}
                      >
                        {navLink.title}
                      </Link>
                      {/* <i className="mdi mdi-chevron-right me-1"></i> */}
                      <span className="menu-arrow"></span>
                      {navLink.isMegaMenu ? (
                        // if menu is mega menu(2 columns grid)
                        <ul
                          className={
                            navLink.isOpenSubMenu
                              ? "submenu megamenu open"
                              : "submenu megamenu"
                          }
                        >
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 12 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 23 && item.id > 11 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                      {item.isNew ? (
                                        <span className="badge bg-danger rounded ms-2">
                                          new
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 34 && item.id > 22 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                      {item.isNew ? (
                                        <span className="badge bg-danger">
                                          new
                                        </span>
                                      ) : null}
                                      {item.isOnePage ? (
                                        <span className="badge bg-warning rounded ms-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                      {item.isupdatePage ? (
                                        <span className="badge badge-pill bg-info">
                                          Updated
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 45 && item.id > 33 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}

                                      {item.isOnePage ? (
                                        <span className="badge bg-warning rounded ms-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                      {item.isupdatePage ? (
                                        <span className="badge badge-pill bg-info">
                                          Updated
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 56 && item.id > 44 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}

                                      {item.isOnePage ? (
                                        <span className="badge bg-warning rounded ms-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                      {item.isupdatePage ? (
                                        <span className="badge badge-pill bg-info">
                                          Updated
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                        </ul>
                      ) : (
                        // if menu is not mega menu(1grid)
                        <ul
                          className={
                            navLink.isOpenSubMenu ? "submenu open" : "submenu"
                          }
                        >
                          {navLink.child.map((childArray, childKey) =>
                            childArray.nestedChild ? (
                              // sub menu item - Level 2
                              <li className="has-submenu" key={childKey}>
                                <Link
                                  to={childArray.link}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    this.openNestedBlock(
                                      navLink.id,
                                      childArray.id
                                    );
                                  }}
                                >
                                  {childArray.title}{" "}
                                  {childArray.isNew ? (
                                    <span className="badge badge-pill badge-success">
                                      Added
                                    </span>
                                  ) : null}
                                </Link>
                                <span className="submenu-arrow"></span>
                                <ul
                                  className={
                                    childArray.isOpenNestedSubMenu
                                      ? "submenu open"
                                      : "submenu"
                                  }
                                >
                                  {childArray.nestedChild.map(
                                    (nestedChildArray, nestedKey) => (
                                      // nested sub menu item - Level 3
                                      <li key={nestedKey}>
                                        <Link to={nestedChildArray.link}>
                                          {nestedChildArray.title}{" "}
                                          {nestedChildArray.isNewPage ? (
                                            <span className="badge badge-danger rounded">
                                              NEW
                                            </span>
                                          ) : null}
                                          {nestedChildArray.isupdatePage ? (
                                            <span className="badge badge-pill badge-info">
                                              Updated
                                            </span>
                                          ) : null}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li key={childKey}>
                                <Link to={childArray.link}>
                                  {childArray.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={key}>
                      <Link to={navLink.link}>{navLink.title}</Link>
                    </li>
                  )
                )}
              </ul>
              <div className="buy-menu-btn d-none">
                <Link
                  to="https://quilt.chat"
                  target="_blank"
                  id="buyButton"
                  className="btn btn-success pills"
                >
                  Launch App
                </Link>
              </div>
            </div>
          </Container>
        </header>

        <Modal
          isOpen={this.state.wishlistModal}
          tabIndex="-1"
          centered
          contentClassName="rounded shadow-lg border-0 overflow-hidden"
          toggle={this.toggleWishlistModal}
        >
          <ModalBody className="py-5">
            <div className="text-center">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                style={{ height: "95px", width: "95px" }}
              >
                <h1 className="mb-0">
                  <i className="uil uil-heart-break align-middle"></i>
                </h1>
              </div>
              <div className="mt-4">
                <h4>Your wishlist is empty.</h4>
                <p className="text-muted">
                  Create your first wishlist request...
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-outline-success pills">
                    + Create new wishlist
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
