import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMap, FaUserCircle } from 'react-icons/fa'
import { GrFavorite } from "react-icons/gr";

const Footer = () => {
  const router = useRouter()
  return (
    <div className='md:flex md:flex-row md:items-center md:justify-center'>
      <div className='cursor-pointer w-fit mb-3 flex flex-row items-center space-x-3 justify-center p-4 rounded-full text-white bg-black'>
        <h1>See on the map</h1>
        <FaMap />
      </div>
      <div className="md:hidden bg-white grid grid-cols-3 items-center sticky bottom-0 h-[80px] py-2 border-t border-gray-200">
        <div className="flex flex-col items-center transition-all hover:text-red-500 cursor-pointer" onClick={() => router.push("/")}>
          <AiOutlineSearch className="w-8 h-8" />
          <span className="text-xs">Explore</span>
        </div>
        <div className="flex flex-col items-center transition-all hover:text-red-500 cursor-pointer">
          <GrFavorite className="w-8 h-8" />
          <span className="text-xs">Favourite</span>
        </div>
        <div className="flex flex-col items-center transition-all hover:text-red-500 cursor-pointer" onClick={() => router.push("/login")}>
          <FaUserCircle className="w-8 h-8" />
          <span className="text-xs">Login</span>
        </div>
      </div>
    </div>
  );
}

export default Footer