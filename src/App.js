import React, { Component } from "react";
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

export default App;
