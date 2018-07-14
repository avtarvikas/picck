import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import Header from "../../../common/Header";
import google from "../../../assets/png/google.png";
import fblogo from "../../../assets/png/Fb.png";
import linkedin from "../../../assets/png/linkedin.png";
import yahoo from "../../../assets/png/yahoo.png";
import twitter from "../../../assets/png/twitter.png";
import instagram from "../../../assets/png/instagram.png";
import user from "../../../assets/png/user.png";
import recruiter from "../../../assets/png/recruiter.png";
import company from "../../../assets/png/company.png";
import marketing from "../../../assets/png/marketing.png";

class Login extends Component {
  render() {
    const { id } = this.props.match.params;
    let imagesrc = user;
    if (id == 'm'){
      imagesrc = marketing
    } else if (id == 'r'){
      imagesrc = recruiter
    } else if (id == 'p'){
      imagesrc = user
    } else if (id == 'c'){
      imagesrc = company
    }
    return (
      <div>
      <Header />
        <div className="container login">
          <div class="outer">
            <form class="form-group">
              <img src={imagesrc} alt='login-user'/>
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

export default withRouter(Login);