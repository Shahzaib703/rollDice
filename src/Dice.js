import React from 'react';

const Dice = ({number}) => {
  return <i className={`dice fas fa-dice-${number}`}></i>;
};

export default Dice;
