import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { logger } from "../../constants";

class SignIn extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="sign-in-page section">
        <div className="container">
          <div className="page-header">
            <h1>SIGN IN</h1>
          </div>
          <div className="page-content row">
            <div className="col-md-8">
              <div className="row m0">
                {logger.map((obj, i) => (
                  <Link
                    to={obj.link}
                    className="col-md-6 sign-in-role-container"
                    key={i}
                  >
                    <img src={obj.logo} width={100} height={100} alt="" />
                    <div className="role-name">{obj.role}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-4">Some sample Text</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
