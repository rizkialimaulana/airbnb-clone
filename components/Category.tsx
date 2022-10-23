import React from 'react'
import { BsFillHouseFill } from "react-icons/bs";

type Props = {}

function Category({name, icon}: any) {
  return (
    <div className='w-28 h-20  bg-white flex flex-col items-center space-y-2 justify-center transition-all 
    border-transparent border-b-2 text-gray-500 hover:text-black hover:border-b-2 hover:border-black'>
        <BsFillHouseFill />
        <h1 className='text-sm'>{name}</h1>
    </div>
  )
}

export default Category