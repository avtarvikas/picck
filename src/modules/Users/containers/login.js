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
    console.log('==========================')
  }
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
          <h1>Login</h1>
          <div className="row">
          </div>
            <div className="col-6 left">
              <img src={imagesrc} alt='login-user'/>
              <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>                
                <input type="submit" value="Go"/>           
              </form>
            </div>
            <div className="col-6 right">
              <div>
                <div className="links google">
                  <Link to="/login/p" >
                    <p>Login with Google</p>
                  </Link>
                </div>
                <div className="links facebook">
                  <Link to="/login/p" >
                    <p>Login with Facebook</p>
                  </Link>
                </div>
                <div className="links linkedin">
                  <Link to="/login/p" >
                    <p>Login with LinkedIn</p>
                  </Link>
                </div>
                <div className="links yahoo">
                  <Link to="/login/p" >
                    <p>Login with Yahoo</p>
                  </Link>
                </div>
                <div className="links twitter">
                  <Link to="/login/p" >
                    <p>Login with Twitter</p>
                  </Link>
                </div>
                <div className="links insta">
                  <Link to="/login/p" >
                    <p>Login with Instagram</p>
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
