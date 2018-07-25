import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import Header from "../../../common/Header";
import user from "../../../assets/png/user.png";
import recruiter from "../../../assets/png/recruiter.png";
import company from "../../../assets/png/company.png";
import marketing from "../../../assets/png/marketing.png";

class Signup extends Component {
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
        <div className="container signup">
          <h1>Sign Up</h1>
          <div className="row">
          </div>
            <div className="col-6 left">
              <img src={imagesrc} alt='login-user'/>
              <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Retype password"/>
                <input type="submit" value="Go"/>
                <p>
                  Already a member? <Link
                  to={`/login/${id}`}>
                  <span>Log in</span>
                  </Link>
                </p>             
              </form>
            </div>
            <div className="col-6 right">
              <div>
                <div className="links google">
                  <Link to="/login/p" >
                    <p>Sign up with Google</p>
                  </Link>
                </div>
                <div className="links facebook">
                  <Link to="/login/p" >
                    <p>Sign up with Facebook</p>
                  </Link>
                </div>
                <div className="links linkedin">
                  <Link to="/login/p" >
                    <p>Sign up with LinkedIn</p>
                  </Link>
                </div>
                <div className="links yahoo">
                  <Link to="/login/p" >
                    <p>Sign up with Yahoo</p>
                  </Link>
                </div>
                <div className="links twitter">
                  <Link to="/login/p" >
                    <p>Sign up with Twitter</p>
                  </Link>
                </div>
                <div className="links insta">
                  <Link to="/login/p" >
                    <p>Sign up with Instagram</p>
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
