import React from 'react';
import { useSelector } from 'react-redux';
import { RaffleInformation } from './RaffleInformation';

export const Raffles = () => {
  const {
    drawerDates: { data },
  } = useSelector((state) => state.information);
  return (
    <div
      className={`list__dates scrollbar ${data.length >= 4 ? 'list__big' : ''}`}
    >
      {data.map((date, index) => (
        <RaffleInformation key={index} {...date} />
      ))}
    </div>
  );
};
