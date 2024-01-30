import React from 'react';
import SmallImageCard from './Cards/SmallImageCard';

const HeroColumn = ({ numberElements, side }) => {
  const elementsArray = Array.from({ length: numberElements });

  return (
    <div className={side}>
      {/* <div className='section-heading'>Trending</div> */}
      {elementsArray.map((_, index) => (
        <SmallImageCard key={index} />
      ))}
    </div>
  );
};

export default HeroColumn;
