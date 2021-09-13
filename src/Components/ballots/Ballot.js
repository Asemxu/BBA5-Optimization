import React from 'react';

export const Ballot = ({code}) => {
  return (
    <div className="ballot">
      <p className="text__primary text-center">{code}</p>
    </div>
  );
};
