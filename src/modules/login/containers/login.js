import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container login">
        <div class="outer">
          <form class="form-group">
            <img src="" />
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit" class="btn-primary">Login</button>
          </form>
          <div class="row icons">
            <img src="if_Gplus.svg" />
            <img src="if_Facebook.svg" />
            <img src="if_LinkedIn.svg" />
            <img src="if_Facebook.svg" />
            <img src="if_Twitter.svg" />
            <img src="if_Instagram.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
