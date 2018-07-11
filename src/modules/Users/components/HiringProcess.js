import React, { Component } from "react";
import { hiringProcess } from "../../constants";

class HiringProcess extends Component {
  render() {
    return (
      <div className="container section hiring">
        <h1>
          HIRING<br />PROCESS
        </h1>
        <div className="row m0 upper">
          {hiringProcess.map((step, i) => (
            <div className="col-md-4 steps" key={i}>
              <img src={step.image} />
              <h3>{step.label}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HiringProcess;
