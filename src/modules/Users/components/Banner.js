import React, { Component } from "react";
import Search from "../../../common/components/Search"

class Banner extends Component {
  render() {
    return (
      <div className="banner row m0">
        <div className="container">
          <div className="row m0">
            <Search/>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
