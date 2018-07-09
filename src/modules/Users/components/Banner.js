import React, { Component }  from 'react'

class Banner extends Component {
    render() {
        return (
            <div className='banner row'>
                <div className='container'>
                    <div className='row'>
                        <div className='banner-text col-8'>
                            <h1>Find The Career You Deserve</h1>
                            <h3>Your job search starts and ends with us.</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;