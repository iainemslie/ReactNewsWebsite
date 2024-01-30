import LargeImageCard from './LargeImageCard';
import SimpleCard from './SimpleCard';
import SmallImageCard from './SmallImageCard';

const Hero = ({ screenSize, articles }) => {
  if (screenSize.width <= 992) {
    // Mobile
    return (
      <div className='container'>
        <div className='hero'>
          <div className='hero-middle'>
            <LargeImageCard />
          </div>
          <div className='hero-left'>
            <SmallImageCard />
            <SmallImageCard />
            <SmallImageCard />
            <SmallImageCard />
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
  } else if (screenSize.width <= 1240) {
    // Large
    return (
      <div className='container'>
        <div className='hero'>
          <div className='hero-middle'>
            <LargeImageCard />
          </div>
          <div className='hero-left'>
            <SmallImageCard />
            <SmallImageCard />
            <SmallImageCard />
            <SmallImageCard />
          </div>
        </div>
      </div>
    );
  } else {
    // Extra Large
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
  }
};

export default Hero;
