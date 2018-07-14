import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { logger } from "../../constants";
import { Link } from 'react-router-dom';

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
              <div onClick={() => { this.props.history.push(obj.link)}} className="col-md-6 sign-in-role-container" key={i}>
                <img src={obj.logo} width={100} height={100} alt=""/>
                <div className="role-name">{obj.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
