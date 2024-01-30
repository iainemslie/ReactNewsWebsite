import LargeImageCard from './LargeImageCard';
import SmallImageCard from './SmallImageCard';

const Hero = () => {
  return (
    <div className='container'>
      <div className='hero'>
        <div className='hero-left'>
          <SmallImageCard />
          <SmallImageCard />
          <SmallImageCard />
          <SmallImageCard />
          <SmallImageCard />
        </div>
        <div className='hero-middle'>
          <LargeImageCard />
        </div>
        <div className='hero-right'>
          <SmallImageCard />
          <SmallImageCard />
          <SmallImageCard />
          <SmallImageCard />
          <SmallImageCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
