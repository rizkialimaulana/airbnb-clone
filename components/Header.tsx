import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/img/airbnb.png'
import { HiSearch } from 'react-icons/hi'
import { FaGlobe } from 'react-icons/fa'
import { HiUserCircle } from 'react-icons/hi'
import { HiMenu } from 'react-icons/hi'
import Category from './Category'
import { BsFilter } from 'react-icons/bs'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import Modal from './Modal'
import { useRouter } from 'next/dist/client/router';

type Props = {}

const Header = ({destination, range, guest}: any) => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const data = [
    {
      id: 1,
      properties: {
        name: "Guest House",
        icon: ""
      }
    }
  ]
  return (
    <header className="sticky top-0 z-50 h-[100px] bg-white shadow-md md:p-5 pt-5 px-5 md:px-10">
      <div className="md:grid md:grid-cols-3">
        <div className="relative hidden md:flex items-center h-10 cursor-pointer my-auto">
          <Image
            onClick={() => router.push("/")}
            src={logo}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="flex flex-row items-center justify-between border-2 shadow-md rounded-full py-2">
          <HiSearch className="md:hidden inline-flex h-8 w-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mx-2" />
          <div className="flex flex-col space-y-2 md:space-y-0 flex-grow">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-5 md:hidden outline-none"
              placeholder={destination || "Where do you wanna go?"}
            />
            <div className="flex items-center">
              <button
                onClick={() => setModal(true)}
                className="pl-5 pr-3 text-semibold text-xs md:text-sm bg-transparent border-r border-gray-300 md:text-black text-gray-400  placeholder-gray-400 outline-none flex-grow"
              >
                {destination || "Destinations"}
              </button>
              <button
                onClick={() => setModal(true)}
                className="pl-5 pr-3 text-semibold text-xs md:text-sm bg-transparent border-r border-gray-300 md:text-black text-gray-400  placeholder-gray-400 outline-none flex-grow"
              >
                {range || "Weeks" }
              </button>
              <button
                onClick={() => setModal(true)}
                className="pl-5 bg-transparent text-semibold text-xs md:text-sm text-gray-400  placeholder-gray-400 outline-none flex-grow"
              >
                {guest || "Guests"}
              </button>
              <HiSearch className="hidden md:inline-flex h-8 w-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mx-2" />
            </div>
          </div>
          <BsFilter className="md:hidden inline-flex h-8 w-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mx-2" />
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
      {modal && (
        <Modal />
      )}
    </header>
  );
}

export default Header