import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMobileView, setWindowSize } from '../../redux/actions/device';

class DeviceUtil extends Component {
    static MOBILE_BREAK_POINT = 600;
    constructor(props) {
        super(props);
        this.callUpdateStore = this.callUpdateStore.bind(this);
        this.callUpdateStore();
    }

    callUpdateStore() {
        this.props.setWindowSize(window.innerWidth, window.innerHeight);
        this.props.setMobileView(window.innerWidth < DeviceUtil.MOBILE_BREAK_POINT);
    }

    componentDidMount() {
        window.addEventListener('resize', this.callUpdateStore);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.callUpdateStore);
    }
    getDeviceClass() {
        if (this.props.isMobile) return 'device-mobile';
        return 'device-desktop';
    }

    render() {
        const helperClass = 'component-device-util ' + this.getDeviceClass();
        return <div className={helperClass}>{this.props.children}</div>;
    }
}
const mapStateToProps = ({ device }) => {
    const { isMobile, windowSize } = device;
    return {
        isMobile,
        windowSize
    };
};
export default connect(mapStateToProps, { setMobileView, setWindowSize })(DeviceUtil);
