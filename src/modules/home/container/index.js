import React, { Component } from 'react';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import Banner from '../component/Banner';
import LoginOptions from '../component/LoginOptions';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <Header />
        <Banner />
        <LoginOptions />
        <Footer />
      </div>
    );
  }
}

export default Home;
