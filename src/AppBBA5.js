import React from 'react';
import { Provider } from 'react-redux';

import { store } from './Redux/Store';
import { Routers } from './Routers/Routers';
import './Styles/styles.scss';



import ('react-gtm-module').then(TagManager=>{
  const tagManagerArgs = {
    gtmId: 'GTM-WJDR4S5',
  };
  
  TagManager.initialize(tagManagerArgs);

});

import('react-facebook-pixel').then(ReactPixel=>{
  const advancedMatching = { em: 'some@email.com' };
  const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
  };
  ReactPixel.default.init('176593354576731', advancedMatching, options);
  ReactPixel.default.pageView();
  
});

export const AppBBA5 = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};
