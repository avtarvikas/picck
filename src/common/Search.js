import React, { Component } from "react";

class Search extends Component {
  state = {
    left: "50px"
  };

  render() {
    const { searchBarFixed, activeTab } = this.props;
    const { left } = this.state;
    let marginLeft = null;
    if(activeTab == 'job') {
      marginLeft = '50px';
    }
    console.log(marginLeft, activeTab);
    return (
      <div className="search-container">
        <div className="container outer">
          <h1>Find The Career You Deserve</h1>
          <div className="row titles m0">
            <span onClick={()=> this.setState({
                left:"50px"
            })}>Jobs</span>
            <span onClick={()=> this.setState({
                left:"165px"
            })}>Companies</span>
            <span onClick={()=> this.setState({
                left:"276px"
            })}>Learning</span>
            <span onClick={()=> this.setState({
                left:"390px"
            })}>Forum</span>
            <div className="arrow" style={{ marginLeft: marginLeft }} />
          </div>
          <form className="form-group" />
          <div className={`row form ${searchBarFixed ? 'search-bar-fixed' : ''}`}>
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
