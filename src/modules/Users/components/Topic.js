import React, { Component } from "react";
import { jobOpening } from "../../constants";

class Topic extends Component {
  render() {
    return (
      <div className="job-opening section row m0">
        <div className="container">
          <div className="page-header">
            <h1>Topic</h1>
          </div>
          {jobOpening.map((obj, i) => (
            <div className="tile row" key={i}>
              <div className="col-md-8 col-sm-6 description">
                {obj.description}
              </div>
              <div className="col-md-2 col-sm-3 location">
                <i className="fa fa-map-marker" aria-hidden="true" />
                {` ${obj.location}`}
              </div>
              <div className="col-md-2 col-sm-3 action-button">
                <button className="button bg-blue">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Topic;
