import {
  MOBILE_VIEW_UPDATE,
  WINDOW_SIZE_UPDATE,
} from '../constants';

export const setMobileView = isMobile => {
  return {
      type: MOBILE_VIEW_UPDATE,
      payload: isMobile
  };
};

export const setWindowSize = (windowSizeW, windowSizeH) => {
  return {
      type: WINDOW_SIZE_UPDATE,
      payload: { windowSizeW, windowSizeH }
  };
};

