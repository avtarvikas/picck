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
  componentWillUnmount(){
    window.removeEventListener("scroll", this.pageScroll);
  }
  pageScroll(){
    if(window.pageYOffset > 328) {
      this.setState({searchBarFixed: true});
    } else {
      this.setState({searchBarFixed: false});
    }
  }
  render() {

    return (
      <div className="banner row m0">
        <Search
          activeTab={this.props.activeSearchTab}
          onActiveSearchTabChange={this.props.onActiveSearchTabChange}
          searchBarFixed={this.state.searchBarFixed}/>
      </div>
    );
  }
}

export default Banner;
