import React, { Component } from "react";
import UsersLogo from "../../../assets/png/user.png";
import { logger } from "../../constants";

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in-page section">
        <div className="container">
          <div className="page-header">
            <h1>SIGN IN</h1>
          </div>
          <div className="page-content row">
            {logger.map((obj, i) => (
              <div className="col-md-3 sign-in-role-container" key={i}>
                <img src={obj.logo} width={100} height={100} />
                <div className="role-name">{obj.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
