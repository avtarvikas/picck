import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

const DEVICE_TYPES = { MOBILE: 'MOBILE', DESKTOP: 'DESKTOP', ALL: 'ALL' };


/**
 * HIDE PER DEVICE
 * @param  {device} props [description]
 * @return {[type]}       [description]
 */
const HideOnDevice = (props) => {
    const { isMobile, children, device } = props;

    if (isMobile && device === DEVICE_TYPES.MOBILE) return null;
    if (!isMobile && device === DEVICE_TYPES.DESKTOP) return null;

    return children;
};

const mapStateToProps = ({ uiDevice }) => {
    const { isMobile, windowSize, userAgent } = uiDevice;
    return {
        isMobile,
        windowSize,
        userAgent
    };
};

HideOnDevice.propTypes = {
    children: PropTypes.element,
    device: PropTypes.oneOf([DEVICE_TYPES.MOBILE, DEVICE_TYPES.DESKTOP, DEVICE_TYPES.ALL])
};



export { DEVICE_TYPES };
export default connect(mapStateToProps, null)(HideOnDevice);
