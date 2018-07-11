import React, { Component } from "react";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import Banner from "../components/Banner";
import SignIn from "../components/SignIn";
import JobOpening from "../components/JobOpening";
import HiringProcess from "../components/HiringProcess";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <JobOpening />
        <SignIn />
        <HiringProcess />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
