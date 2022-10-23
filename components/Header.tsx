import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/img/airbnb.png'
import { HiSearch, HiXCircle } from 'react-icons/hi'
import { FaGlobe } from 'react-icons/fa'
import { HiUserCircle } from 'react-icons/hi'
import { HiMenu } from 'react-icons/hi'
import Category from './Category'
import { BsFilter } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

type Props = {}

const Header = (props: Props) => {
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
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
  const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }
  const handleSelect = (rangers: any) => {
    setStartDate(rangers.selection.startDate)
    setEndDate(rangers.selection.endDate)
  }
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
        <div className="flex flex-row items-center justify-between border-2 shadow-md rounded-full py-2">
          <HiSearch className="md:hidden inline-flex h-8 w-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mx-2" />
          <div className="flex flex-col space-y-2 md:space-y-0 flex-grow">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-5 md:hidden outline-none"
              placeholder="Where do you wanna go?"
            />
            <div className="flex items-center">
              <button
                onClick={() => setModal(true)}
                className="pl-5 pr-3 text-semibold text-xs md:text-sm bg-transparent border-r border-gray-300 md:text-black text-gray-400  placeholder-gray-400 outline-none flex-grow"
              >
                Destinations
              </button>
              <button
                onClick={() => setModal(true)}
                className="pl-5 pr-3 text-semibold text-xs md:text-sm bg-transparent border-r border-gray-300 md:text-black text-gray-400  placeholder-gray-400 outline-none flex-grow"
              >
                Weeks
              </button>
              <button
                onClick={() => setModal(true)}
                className="pl-5 bg-transparent text-semibold text-xs md:text-sm text-gray-400  placeholder-gray-400 outline-none flex-grow"
              >
                Guests
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
      <div className="flex items-center space-x-3 mt-2 md:hidden">
        {data.map((item: any) => (
          <Category
            key={item.id}
            name={item.properties.name}
            icon={item.properties.icon}
          />
        ))}
      </div>
      {search && (
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
          className="h-fit w-fit bg-white p-2"
        >
          <div className="flex flex-row items-center space-x-5">
            <HiXCircle onClick={() => setSearch("")} className="w-8 h-8" />
            <div className="flex flex-row items-center space-x-4">
              <span className="text-lg font-bold cursor-pointer">Places</span>
              <span className="text-lg font-bold cursor-pointer">
                Experiences
              </span>
            </div>
          </div>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
        </motion.div>
      )}
      {modal && (
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:h-[100%] h-screen w-full md:w-fit z-4 bg-white p-2"
        >
          <div className="flex flex-row items-center space-x-5">
            <HiXCircle onClick={() => setModal(false)} className="w-8 h-8" />
            <div className="flex flex-row items-center space-x-4">
              <span className="text-lg font-bold cursor-pointer">Book Date</span>
            </div>
          </div>
          <div className='mt-10 w-full flex flex-col col-span-3 mx-auto'>  
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Header