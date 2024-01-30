import React from 'react';
import SmallImageCard from './Cards/SmallImageCard';
import SimpleCard from './Cards/SimpleCard';

const HeroColumn = ({ numberElements, side, type, heading }) => {
  const elementsArray = Array.from({ length: numberElements });

  if (type === 'SmallImageCard') {
    return (
      <div className={side}>
        <div className='section-heading'>{heading}</div>
        {elementsArray.map((_, index) => (
          <SmallImageCard key={index} />
        ))}
      </div>
    );
  } else if (type === 'SimpleCard') {
    return (
      <div className={side}>
        <div className='section-heading'>{heading}</div>
        {elementsArray.map((_, index) => (
          <SimpleCard key={index} />
        ))}
      </div>
    );
  }
};

export default HeroColumn;
