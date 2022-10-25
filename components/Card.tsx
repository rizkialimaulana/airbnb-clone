import React from 'react'
import { AiFillStar} from 'react-icons/ai'

const Card = ({name, address, image, landmarks, rating, price}: any) => {
  return (
    <div className="p-4 border h-fit rounded-lg md:w-full md:h-[450px] border-gray-200 
     md:border-none flex flex-col space-y-2 transition-all hover:scale-105 hover:shadow-lg ease-out hover:opacity-80 w-full cursor-pointer">
      <img src={image} className="w-full h-[50%] object-cover rounded-md" />
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-lg">{name}</h1>
          <span className="flex flex-row items-center space-x-2">
            <AiFillStar className='text-red-500'/>
            {rating}
          </span>
        </div>
        <span className="text-red-500 font-semibold text-md">{price} / Night</span>
        <span className="text-gray-500">{address}</span>
        <div className='flex flex-row space-x-4'>
          {landmarks.map((item : any) => (
            <div className='flex flex-col space-x-1 p-2 bg-gray-200'>
              <span className='text-sm text-gray-400'>{item.label} : </span>
              <span className='text-md text-red-500'>{item.distance}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card