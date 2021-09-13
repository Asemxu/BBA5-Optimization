import React from 'react';
import { useSelector } from 'react-redux';
import { PositionUsers } from './PositionUsers';

export const Positions = () => {
  const {
    tops: { list },
  } = useSelector((state) => state.information);

  return (
    <div
      className={`content__list__positions scrollbar ${
        list.length >= 4 ? 'list__big' : ''
      }`}
    >
      {list.map((user, index) => (
        <PositionUsers key={index} {...user} position={index + 1} />
      ))}
    </div>
  );
};
