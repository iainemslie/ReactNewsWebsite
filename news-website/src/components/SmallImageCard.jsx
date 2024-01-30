import React from 'react';

const SmallImageCard = () => {
  return (
    <div className='small-image-card'>
      <div className='small-card-left'>
        <h4 className='card-category'>Business</h4>
        <h2 className='card-title'>
          From Business Casual to Business Confident in 10 Steps
        </h2>
        <h5 className='card-author'>Sally Struthers | 2024-01-29</h5>
      </div>
      <div className='small-card-right'>
        <img
          src='https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='man in an office'
        />
      </div>
    </div>
  );
};

export default SmallImageCard;
