// src/components/CardsSection.jsx

import SingleCard from './SingleCard';
const Cards = () => {
  return (
    <div className="-mt-[30px] bg-[#CAF0F8] ">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 mx-auto ">
        <div className="flex flex-col mx-auto md:flex-row justify-between">
    <SingleCard />
    <SingleCard />
    <SingleCard />
        </div>
      </div>
    </div>
  );
};

export default Cards;

{/* <div className="bg-[#103C63] text-white rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <Image
                src="/icons/femai-icon.png" // Replace with your icon path
                alt="FemAI Icon"
                width={64}
                height={64}
                className="rounded-full bg-[#D3E6F5] p-2"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">FemAI</h3>
            <p className="text-sm">Your Perfect Plan, Just Like That!</p>
          </div> */}

//           {/* Card 2: Blogs */}
//           <div className="bg-[#103C63] text-white rounded-lg p-6 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <Image
//                 src="/icons/blogs-icon.png" // Replace with your icon path
//                 alt="Blogs Icon"
//                 width={64}
//                 height={64}
//                 className="rounded-full bg-[#D3E6F5] p-2"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Blogs</h3>
//             <p className="text-sm">Health Tips to Make You Smile!</p>
//           </div>

//           {/* Card 3: FemPlayer */}
//           <div className="bg-[#103C63] text-white rounded-lg p-6 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <Image
//                 src="/icons/femplayer-icon.png" // Replace with your icon path
//                 alt="FemPlayer Icon"
//                 width={64}
//                 height={64}
//                 className="rounded-full bg-[#D3E6F5] p-2"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">FemPlayer</h3>
//             <p className="text-sm">Watch, Learn, Glow with Ease!</p>
//           </div>