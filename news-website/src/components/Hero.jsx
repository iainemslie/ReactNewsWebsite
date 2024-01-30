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
          <HeroColumn
            numberElements={4}
            side='hero-left'
            type='SmallImageCard'
            heading='Top Stories'
          />
          <HeroColumn
            numberElements={6}
            side='hero-right'
            type='SimpleCard'
            heading='Trending'
          />
        </div>
      </div>
    );
  } else if (screenSize.width <= 1200) {
    // Large
    return (
      <div className='container'>
        <div className='hero'>
          <HeroColumn
            numberElements={4}
            side='hero-left'
            type='SimpleCard'
            heading='Trending'
          />
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
          <HeroColumn
            numberElements={2}
            side='hero-left'
            type='SmallImageCard'
            heading='Top Stories'
          />
          <div className='hero-middle'>
            <LargeImageCard />
          </div>
          <HeroColumn
            numberElements={4}
            side='hero-right'
            type='SimpleCard'
            heading='Trending'
          />
        </div>
      </div>
    );
  } else if (screenSize.width <= 1714) {
    return (
      <div className='container'>
        <div className='hero'>
          <HeroColumn
            numberElements={2}
            side='hero-left'
            type='SmallImageCard'
            heading='Top Stories'
          />
          <div className='hero-middle'>
            <LargeImageCard />
          </div>
          <HeroColumn
            numberElements={5}
            side='hero-right'
            type='SimpleCard'
            heading='Trending'
          />
        </div>
      </div>
    );
  } else if (screenSize.width <= 1800) {
    return (
      <div className='container'>
        <div className='hero'>
          <HeroColumn
            numberElements={3}
            side='hero-left'
            type='SmallImageCard'
            heading='Top Stories'
          />
          <div className='hero-middle'>
            <LargeImageCard />
          </div>
          <HeroColumn
            numberElements={5}
            side='hero-right'
            type='SimpleCard'
            heading='Trending'
          />
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
            type='SmallImageCard'
            heading='Top Stories'
          />
          <div className='hero-middle'>
            <LargeImageCard />
          </div>
          <HeroColumn
            numberElements={6}
            side='hero-right'
            type='SimpleCard'
            heading='Trending'
          />
        </div>
      </div>
    );
  }
};

export default Hero;
