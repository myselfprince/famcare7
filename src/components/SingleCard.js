import React from 'react'
import Image from 'next/image';
const SingleCard = (props) => {
  return (
    <div className="bg-[#103C63] text-white rounded-[30px] z-10 flex flex-col items-center text-center w-[300px] h-[150px]">
                <div className="mb-4 ">
                  <Image
                    src={`/icons/${props.photo}`}
                    alt="FemAI Icon"
                    width={64}
                    height={64}
                    className="rounded-full bg-[#D3E6F5] p-2 -mt-7"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
                <p className="text-sm">{props.para}</p>
              </div>
    
  )
}

export default SingleCard