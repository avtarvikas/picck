import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import DeviceUtil from "./common/Util/DeviceUtil";

class App extends Component {
  render() {
    return (
      <div>
        <DeviceUtil>{this.props.children}</DeviceUtil>
      </div>
    );
  }
}

export default withRouter(App);
