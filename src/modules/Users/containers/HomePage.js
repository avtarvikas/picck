import React, { Component } from "react";
import { withRouter } from 'react-router'
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import Banner from "../components/Banner";
import SignIn from "../components/SignIn";
import JobOpening from "../components/JobOpening";
import HiringProcess from "../components/HiringProcess";
import LatestCompanies from "../components/LatestCompanies";
import CommunityUpdates from "../components/CommunityUpdates";
import Topic from "../components/Topic";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeSearchTab: 'jobs'
    };
    this.onActiveSearchTabChange = this.onActiveSearchTabChange.bind(this);
  }
  onActiveSearchTabChange(){

  }
  render() {
    console.log(this.state,'STATE')
    const { activeSearchTab } = this.state;
    let active = null;
    if(activeSearchTab == 'jobs') {
      active = <JobOpening />
    } else if(activeSearchTab == 'company') {
      active = <LatestCompanies />
    } else if(activeSearchTab == 'community') {
      active = <CommunityUpdates />
    } else if(activeSearchTab == 'topics') {
      active = <Topic />
    }
    return (
      <div>
        <Header />
        <Banner
          activeSearchTab={activeSearchTab}
          onActiveSearchTabChange={activeSearchTab => this.setState({activeSearchTab})}
        />
        {active}
        <SignIn />
        <HiringProcess />
        <Footer />
      </div>
    );
  }
}

export default withRouter(HomePage);
