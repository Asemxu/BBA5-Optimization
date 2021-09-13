import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { PageAvatars } from './PageAvatars';
import { PageAwards } from './PageAwards';
import { PageWellcome } from './PageWellcome';

export const PageMain = () => {
  const {
    logged: { num, registerStep },
  } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {num === 0 && registerStep === 0 && <PageAvatars />}
      {num === 0 && registerStep === 1 && <PageAwards />}
      {num === 0 &&
        (registerStep === 2 ||
          registerStep === 3 ||
          registerStep === 4 ||
          registerStep === 5) && <PageWellcome />}
      {num === 1 && <PageWellcome />}
    </Fragment>
  );
};
