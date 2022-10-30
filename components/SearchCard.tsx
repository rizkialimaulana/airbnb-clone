import React from 'react'
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

const SearchCard = ({
  name,
  address,
  image,
  landmarks,
  rating,
  price,
}: any) => {
  return (
    <div className="flex py-7 px-2 border-b md:flex-row h-fit flex-col space-y-5 md:space-y-0 transition-all hover:opacity-80 hover:shadow-lg">
      <div className="">
        <img
          src={image}
          alt=""
          className="relative h-40 w-full object-cover md:h-52 md:w-80 flex-shrink-0 rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow md:pl-5 pl-0">
        <div className="flex justify-between">
          <p className="text-sm">{address}</p>
          <AiOutlineHeart className="h-8 cursor-pointer" />
        </div>
        <h4 className="text-xl font-bold text-red-500">{name}</h4>
        {landmarks.map((item: any) => (
          <div className="mb-1 text-gray-500">
            <span>
              {item.label} : {item.distance}
            </span>
          </div>
        ))}
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <AiOutlineStar className="text-red-500" />
            <span>{rating}</span>
          </div>
          <h3 className="text-lg">{price} / Night</h3>
        </div>
      </div>
    </div>
  );
};

export default SearchCard