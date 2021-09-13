import React from 'react';
import { Provider } from 'react-redux';

import { store } from './Redux/Store';
import { Routers } from './Routers/Routers';
import TagManager from 'react-gtm-module';
import ReactPixel from 'react-facebook-pixel';
import './Styles/styles.scss';

const tagManagerArgs = {
  gtmId: 'GTM-WJDR4S5',
};

TagManager.initialize(tagManagerArgs);

const advancedMatching = { em: 'some@email.com' };
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('176593354576731', advancedMatching, options);
ReactPixel.pageView();

export const AppBBA5 = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};
