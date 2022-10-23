import Image from 'next/image'
import React from 'react'
import logo from '../assets/img/airbnb.png'
import { HiSearch } from 'react-icons/hi'
import { FaGlobe } from 'react-icons/fa'
import { HiUserCircle } from 'react-icons/hi'
import { HiMenu } from 'react-icons/hi'
import { HiFilter } from 'react-icons/hi'
import Category from './Category'

type Props = {}

const Header = (props: Props) => {
  const data = [
    {
      id: 1,
      properties: {
        name: "Bandung",
        icon : null
      }
    },
    {
      id: 2,
      properties: {
        name: "Jakarta",
        icon : null
      }
    },
    {
      id: 3,
      properties: {
        name: "Surabaya",
        icon : null
      }
    },
    {
      id: 3,
      properties: {
        name: "Yogyakarta",
        icon : null
      }
    },
  ]
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md md:p-5 pt-5 px-5 md:px-10">
      <div className="md:grid md:grid-cols-3">
        <div className="relative hidden md:flex items-center h-10 cursor-pointer my-auto">
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="flex items-center border-2 shadow-md rounded-full py-2">
          <HiSearch className="inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
          <input
            type="text"
            placeholder="Start your journey"
            className="pl-5 bg-transparent text-gray-600  placeholder-gray-400 outline-none flex-grow"
          />
          <HiFilter className="inline-flex h-8 w-8 bg-transparent text-red-400 border border-red-400 rounded-full p-2 cursor-pointer mx-2" />
        </div>
        <div className="hidden md:flex space-x-4 items-center justify-end">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <FaGlobe className="h-6 w-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <HiMenu className="h-6 cursor-pointer" />
            <HiUserCircle className="h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 mt-2 md:hidden">
        {data.map((item:any)=> (
          <Category 
            key={item.id}
            name={item.properties.name}
            icon={item.properties.icon}
          />
        ))}
      </div>
    </header>
  );
}

export default Header