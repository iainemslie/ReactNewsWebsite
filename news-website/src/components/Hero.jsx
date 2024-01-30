import LargeImageCard from './Cards/LargeImageCard';
import SimpleCard from './Cards/SimpleCard';
import SmallImageCard from './Cards/SmallImageCard';
import HeroColumn from './HeroColumn';

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
            <SimpleCard />
          </div>
        </div>
      </div>
    );
  } else if (screenSize.width <= 1200) {
    // Large
    return (
      <div className='container'>
        <div className='hero'>
          <div className='hero-left'>
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
          </div>
          <div className='hero-middle'>
            <LargeImageCard />
          </div>
        </div>
      </div>
    );
  } else if (screenSize.width <= 1450) {
    return (
      <div className='container'>
        <div className='hero'>
          <div className='hero-left'>
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
          </div>
        </div>
      </div>
    );
  } else if (screenSize.width <= 1714) {
    return (
      <div className='container'>
        <div className='hero'>
          <div className='hero-left'>
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
  } else if (screenSize.width <= 1800) {
    return (
      <div className='container'>
        <div className='hero'>
          <div className='hero-left'>
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
  } else {
    // Extra Large
    return (
      <div className='container'>
        <div className='hero'>
          <HeroColumn
            numberElements={4}
            side='hero-left'
            element={SmallImageCard}
          />
          <div className='hero-middle'>
            <LargeImageCard />
          </div>
          <div className='hero-right'>
            {/* <div className='section-heading'>Top Stories</div> */}
            <SimpleCard />
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
