import React from 'react';
import { useBallots } from '../../Hooks/useBallots';
import { Ballot } from './Ballot';
import { Spinner } from '../Spinner';
import { ErrorMessage } from '../messages/ErrorMessage';

export const Ballots = () => {
  const { ballots, isLoading } = useBallots();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className={`content__list__ballots scrollbar ${
            ballots.length >= 4 ? 'list__big' : ''
          }`}
        >
          {!ballots.length ? (
            <ErrorMessage text="Aún no has agregado una boleta" />
          ) : (
            ballots.map((ballot, index) => (
              <Ballot key={index} code={ballot.code} />
            ))
          )}
        </div>
      )}
    </>
  );
};
