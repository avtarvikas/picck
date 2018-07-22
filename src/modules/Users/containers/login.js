import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
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
  componentDidMount(){
    console.log('===================================')
  }
  render() {
    const { id } = this.props.match.params;
    let imagesrc = user;
    if (id === 'm'){
      imagesrc = marketing
    } else if (id === 'r'){
      imagesrc = recruiter
    } else if (id === 'p'){
      imagesrc = user
    } else if (id === 'c'){
      imagesrc = company
    }
    return (
      <div>
      <Header />
        <div className="container login">
          <div className="outer">
            <form className="form-group">
              <img src={imagesrc} alt='login-user'/>
              <div className="login-with">Login With</div>
              <input type="text" name="username" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
              <button type="submit" className="btn-primary">Login</button>
            </form>
            <div className="icons">
              <div className='row'>
                <Link
                  to="/"
                  className="col-md-2"
                >
                  <img src={google} alt='google' />
                </Link>
                <Link
                  to="/"
                  className="col-md-2"
                >
                  <img src={fblogo} alt='facebook' />
                </Link>
                <Link
                  to="/"
                  className="col-md-2"
                >
                  <img src={linkedin} alt='linkedin' />
                </Link>
                <Link
                  to="/"
                  className="col-md-2"
                >
                  <img src={yahoo} alt='yahoo' />
                </Link>
                <Link
                  to="/"
                  className="col-md-2"
                >
                  <img src={twitter} alt='twitter' />
                </Link>
                <Link
                  to="/"
                  className="col-md-2"
                >
                  <img src={instagram} alt='instagram' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
