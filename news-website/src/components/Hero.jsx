import LargeImageCard from './LargeImageCard';
import SimpleCard from './SimpleCard';
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
        </div>
        <div className='hero-middle'>
          <LargeImageCard />
        </div>
        <div className='hero-right'>
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
