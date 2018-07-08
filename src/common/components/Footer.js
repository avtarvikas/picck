import React, { Component } from 'react'
import Button from './form/button';

class Footer extends Component {
    render () {
        return(
            <footer className='footer row'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 picck-footer'>
                            <h5>Picck</h5>
                            <a href="#">About Us</a><br/>
                            <a href="#">Awards & Trends</a><br/>
                            <a href="#">Blog</a>
                        </div>
                        <div className='col-2 employers'>
                            <h5>Employers</h5>
                            <a href="#">Get a FREE Employer Account</a><br/>
                            <a href="#">Employer Center</a><br/>
                            <a href="#">Post a Job</a><br/>
                        </div>
                        <div className='col-2 community'>
                            <h5>Community</h5>
                            <a href="#">Help/Contact Us</a><br/>
                            <a href="#">Guidelines</a><br/>
                            <a href="#">Terms of Use (New)</a><br/>
                            <a href="#">Privacy & Cookies (New)</a>
                        </div>
                        <div className='col-2 wok-with-us'>
                            <h5>Work With Us</h5>
                            <a href="#">Job Boards</a><br/>
                            <a href="#">Advertisers</a><br/>
                            <a href="#">Developers</a><br/>
                            <a href="#">Careers</a>
                        </div>
                        <div className='col-4 pickk-contact-footer'>
                            <div className='footer-right'>
                                <h1>Picck</h1>
                                <span>@ 1994 threemillion</span><br/>
                                <span>+98554242741</span><br/>
                                <span>PicCare@picck.com</span>
                            </div>                            
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;