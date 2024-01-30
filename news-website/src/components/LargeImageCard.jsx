import React from 'react';

const LargeImageCard = () => {
  return (
    <div className='large-image-card'>
      <img
        src='https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='two ladies laughing'
      />
      <h4 className='card-category'>Entertainment</h4>
      <h2 className='card-title'>
        Top 10 Tips for Day Drinking The Right Way This Summer
      </h2>
      <h5 className='card-author'>Sally Struthers | 2024-01-29</h5>
      <p className='card-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nam
        excepturi nulla ducimus similique reiciendis minima non architecto quam
        exercitationem.
      </p>
    </div>
  );
};

export default LargeImageCard;
