import React, { Component } from "react";
import Button from "./form/button";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="">
          {/* <img src={logo} width={90}/> */}
            <div className="brand-name">
              <span className="text-blue">P</span>
              <span className="text-yellow">i</span>
              <span className="text-green">cc</span>
              <span className="text-red">k</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {/*<li className="nav-item active">
                <a className="nav-link" href="">
                <Button
                    disabled={false}
                    value="Home"
                    className="bg-yellow"
                  />
                </a>
              </li>*/}
              <li className="nav-item">
                <a className="nav-link disabled" href="">
                  <Button
                    disabled={false}
                    value="Sign In"
                    className="bg-blue"
                  />
                </a>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
