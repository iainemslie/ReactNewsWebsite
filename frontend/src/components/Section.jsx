import SmallImageCard from './Cards/SmallImageCard';

const Section = () => {
  return (
    <div className='container'>
      <div className='section-grid '>
        <SmallImageCard />
        <SmallImageCard />
        <SmallImageCard />
        <SmallImageCard />
      </div>
    </div>
  );
};

export default Section;
