// src/components/CardsSection.jsx

import SingleCard from './SingleCard';
const Cards = () => {
  return (
    <div className="-mt-[30px] bg-[#CAF0F8] ">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8  ">
        <div className="flex flex-col mx-auto md:flex-row justify-between">
    <SingleCard title="FemAI" para="Your Perfect Plan, Just Like That!" photo="icon 1.png"/>
    <SingleCard title="Blogs" para="Health Tips to Make You Smile!" photo="blogs.png"/>
    <SingleCard title="FemPlayer" para="Watch, Learn, Glow with Ease!" photo="icon 1.png" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
