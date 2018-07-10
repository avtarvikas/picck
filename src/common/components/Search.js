import React, { Component } from "react";

class Search extends Component {
  state = {
    left: "60px"
  };

  render() {
    const { left } = this.state;
    return (
      <div className="search-container">
        <div className="container outer">
          <h1>Find The Career You Deserve</h1>
          <div className="row titles m0">
            <span onClick={()=> this.setState({
                left:"60px"
            })}>Jobs</span>
            <span onClick={()=> this.setState({
                left:"180px"
            })}>Companies</span>
            <span onClick={()=> this.setState({
                left:"306px"
            })}>Salaries</span>
            <span onClick={()=> this.setState({
                left:"430px"
            })}>Interviews</span>
            <div className="arrow" style={{ marginLeft: left }} />
          </div>
          <form className="form-group" />
          <div className="row form">
            <input
              name="sc.keyword"
              id="KeywordSearch"
              className="keyword"
              type="text"
              placeholder="Job Title, Keywords or Company"
            />
            <input
              id="LocationSearch"
              className="loc"
              type="text"
              placeholder="Location"
            />
            <button className="search-btn" type="submit" tabIndex="0" ><i className="fa fa-search"/></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
