import React, { Component } from "react";
import Header from "../../../common/Header";
import google from "../../../assets/png/google.png";
import fblogo from "../../../assets/png/Fb.png";
import linkedin from "../../../assets/png/linkedin.png";
import yahoo from "../../../assets/png/yahoo.png";
import twitter from "../../../assets/png/twitter.png";
import instagram from "../../../assets/png/instagram.png";

class Login extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="container login">
          <div class="outer">
            <form class="form-group">
              <img src="" alt='login-user'/>
              <input type="text" name="username" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
              <button type="submit" class="btn-primary">Login</button>
            </form>
            <div class="icons">
              <div className='row'>
                <img src={google} alt='google' />
                <img src={fblogo} alt='facebook' />
                <img src={linkedin} alt='linkedin' />
                <img src={yahoo} alt='yahoo' />
                <img src={twitter} alt='twitter' />
                <img src={instagram} alt='instagram' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
