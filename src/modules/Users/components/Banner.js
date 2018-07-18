import React, { Component } from "react";
import Search from "../../../common/Search"

class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchBarFixed: false
    };
    this.pageScroll = this.pageScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener("scroll", this.pageScroll);
  }
  pageScroll(){
    console.log(window.pageYOffset, this.state)
    if(window.pageYOffset > 328) {
      this.setState({searchBarFixed: true});
    } else {
      this.setState({searchBarFixed: false});
    }
  }
  render() {

    return (
      <div className="banner row m0">
        <Search activeTab={this.props.activeSearchTab} searchBarFixed={this.state.searchBarFixed}/>
      </div>
    );
  }
}

export default Banner;
