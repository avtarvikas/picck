import { MOBILE_VIEW_UPDATE, WINDOW_SIZE_UPDATE } from '../constants';

const INITIAL_STATE = {
    isMobile: false,
    windowSize: null,
    windowHeight: null
};

const device =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOBILE_VIEW_UPDATE:
            return {
                ...state,
                isMobile: action.payload
            };
        case WINDOW_SIZE_UPDATE: {
            const { windowSizeW, windowSizeH } = action.payload;
            return {
                ...state,
                windowSize: windowSizeW,
                windowHeight: windowSizeH
            };
        }
        default:
            return state;
    }
};

export default device ;
