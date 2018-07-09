import React, { Component } from "react";
import { jobOpening } from "../../constants";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:null
    }
  }
  render() {
    return (
      <div className="job-opening row">
        <div className="container">
          <div className="page-header">
            <h1>CURRENT JOBS OPENING</h1>
          </div>
          {jobOpening.map((obj, i) => (
              <div className={`tile row ${this.state.selected != null && this.state.selected == i ? 'selected-job' : '' }`} key={i}>
            <div className='col-md-8 col-sm-6 description'>{obj.description}</div>
            <div className='col-md-2 col-sm-3 location'><i className="fa fa-map-marker" aria-hidden="true"></i>{` ${ obj.location}`}</div>
            <div className='col-md-2 col-sm-3 action-button' ><button className='button bg-blue' onClick={()=>{
              this.setState({
                selected: i
              })
            }}>Apply Now</button></div>
          </div>
            ))}
        </div>
      </div>
    );
  }
}

export default SignIn;
