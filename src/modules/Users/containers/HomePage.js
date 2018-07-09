import React, { Component } from 'react';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import Banner from '../components/Banner';
import SignIn from '../components/SignIn';

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <Header />
        <Banner />
        <SignIn />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
