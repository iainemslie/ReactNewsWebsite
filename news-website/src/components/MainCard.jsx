import React from 'react';

const MainCard = () => {
  return (
    <div className='main-card'>
      <img
        src='https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='two ladies laughing'
      />
      <h4 className='card-category'>Category</h4>
      <h2 className='card-title'>Headline Text</h2>
      <p className='card-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nam
        excepturi nulla ducimus similique reiciendis minima non architecto quam
        exercitationem.
      </p>
    </div>
  );
};

export default MainCard;
