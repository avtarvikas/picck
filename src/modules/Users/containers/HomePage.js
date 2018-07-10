import React, { Component } from "react";
import Header from "../../../common/components/Header";
import Footer from "../../../common/components/Footer";
import Banner from "../components/Banner";
import SignIn from "../components/SignIn";
import JobOpening from "../components/JobOpening";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <SignIn />
        <JobOpening />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
