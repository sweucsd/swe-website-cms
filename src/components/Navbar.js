import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    const { navBarActiveClass } = this.state;
    return (
      <div id="pattern" className="pattern">
        <a
          className={`menu-link ${navBarActiveClass}`}
          href="javascript:void(0)"
          onClick={() => this.toggleHamburger()}
          style={{ cursor: "pointer" }}
          role="button"
        >
          &#9776;
        </a>
        <nav
          id="menu"
          role="navigation"
          className={`z-depth-3 ${navBarActiveClass}`}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/envision">Envision</Link>
            </li>
            <li>
              <Link to="/social">Social</Link>
            </li>
            <li>
              <Link to="/professional">Professional</Link>
            </li>
            <li>
              <Link to="/outreach">Outreach</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navbar;
