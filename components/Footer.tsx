import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { GrFavorite } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="md:hidden bg-white grid grid-cols-3 items-center sticky bottom-0 h-[80px] py-2 border-t border-gray-200">
      <div className="flex flex-col items-center transition-all hover:text-red-500">
        <AiOutlineSearch className="w-8 h-8" />
        <span className="text-xs">Explore</span>
      </div>
      <div className="flex flex-col items-center transition-all hover:text-red-500">
        <GrFavorite className="w-8 h-8" />
        <span className="text-xs">Favourite</span>
      </div>
      <div className="flex flex-col items-center transition-all hover:text-red-500">
        <FaUserCircle className="w-8 h-8" />
        <span className="text-xs">Login</span>
      </div>
    </div>
  );
}

export default Footer