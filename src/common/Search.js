import React, { Component } from "react";

class Search extends Component {
  constructor(props){
    super(props);
    this.state = { };
  };

  render() {
    const { searchBarFixed, activeTab, onActiveSearchTabChange } = this.props;
    let left;
    if( activeTab === 'jobs' ){
      left = '11%';
    } else if( activeTab === 'company' ){
      left = '36%';
    } else if( activeTab === 'community' ){
      left = '61%';
    } else if ( activeTab === 'topics'){
      left = '86%';
    }
    return (
      <div className="search-container">
        <div className="container outer">
          <h1>Find The Career You Deserve</h1>
          <div className="row titles m0">
            <span onClick={() => onActiveSearchTabChange('jobs')}>Latest Jobs</span>
            <span onClick={() => onActiveSearchTabChange('company')}>Company Updates</span>
            <span onClick={() => onActiveSearchTabChange('community')}>Community Updates</span>
            <span onClick={() => onActiveSearchTabChange('topics')}>Topic</span>
            <div className="arrow" style={{ marginLeft: left }} />
          </div>
          <form className="form-group" />
          <div className={`row form m0 ${searchBarFixed ? 'search-bar-fixed' : ''}`}>
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
