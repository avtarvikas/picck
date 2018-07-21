import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import Header from "../../../common/Header";

class Signup extends Component {
  componentDidMount(){
    console.log('==========================')
  }
  render() {
    return (
      <div>
      <Header />
        <div className="container signup">
          <h1>Sign Up</h1>
          <div className="left">
            <form>
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <input type="password" placeholder="Retype password"/>
              <input type="submit" value="Go"/>
              <p>
                Already a member? <Link
                to="/">
                <span>Log in</span>
                </Link>
              </p>             
            </form>
          </div>
          <div className="right">
            <div>
              <div className="links">
                <Link to="/" >
                  <p>Sign up with Facebook</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
