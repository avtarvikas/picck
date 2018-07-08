import React, { Component } from 'react'
import Button from './form/button';

class Header extends Component {
    render () {
        return(
            <div className='header row'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='brand-name'>
                                <span className='text-blue'>P</span>
                                <span className='text-yellow'>i</span>
                                <span className='text-green'>cc</span>
                                <span className='text-red'>k</span>
                            </div>
                            <div className='button-group'>
                                <Button disabled={true} value='Button 1' />
                                <Button disabled={true} value='Button 2' />
                                <Button disabled={true} value='Button 3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;