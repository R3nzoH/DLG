import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import FourtSection from './FourtSection/FourtSection';
import FiveSection from './FiveSection/FiveSecton';
const Home: React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <SecondSection/>
      <FourtSection/>
      <ThirdSection/>
      <FiveSection/>
    </div>
  );
};

export default Home;