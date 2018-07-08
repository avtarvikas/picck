import React, { Component } from 'react';
import logo from '../../../assets/svg/logo.svg';
import Header from '../../../common/components/Header';
import Banner from '../component/Banner';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <Header />
        <Banner />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
