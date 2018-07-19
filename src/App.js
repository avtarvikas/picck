import React, { Component } from "react";
import { withRouter } from 'react-router'
import DeviceUtil from "./common/Util/DeviceUtil";

class App extends Component {
  render() {
    console.log(this.props, '0-0-0-0-0-0-0-00-00-00-00')
    return (
      <div>
        <DeviceUtil>{this.props.children}</DeviceUtil>
      </div>
    );
  }
}

export default withRouter(App);
