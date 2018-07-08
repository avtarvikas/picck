import React, { Component }  from 'react'
import banner from '../../../assets/png/banner.png';

class Banner extends Component {
    render() {
        return (
            <div className='banner row'>
                <img src={banner} className='banner-image' alt='banner' />
                <div className='container'>
                    <div className='row'>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;