import React, { Component } from "react";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import Banner from "../components/Banner";
import SignIn from "../components/SignIn";
import JobOpening from "../components/JobOpening";
import HiringProcess from "../components/HiringProcess";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeSearchTab: 'job'
    };
    this.onActiveSearchTabChange = this.onActiveSearchTabChange.bind(this);
  }
  onActiveSearchTabChange(){

  }
  render() {
    let active = null;
    if(this.state.activeSearchTab == 'job'){
      active = <JobOpening />
    }
    return (
      <div>
        <Header />
        <Banner
          activeSearchTab={this.state.activeSearchTab}
          onActiveSearchTabChange={this.onActiveSearchTabChange}
        />
        {active}
        <SignIn />
        <HiringProcess />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
