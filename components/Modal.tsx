import React, { useState } from 'react'
import { FaChild, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { HiXCircle } from 'react-icons/hi';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';
import { format } from "date-fns";

type Props = {}

const Modal = (props: Props) => {
    const router = useRouter()
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adult, setAdult] = useState<number | undefined>(1);
    const [child, setChild] = useState<number | undefined>(0);
    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    };
    const formatStartDate = format(new Date(startDate), 'dd-MM-yyyy')
    const formatEndDate = format(new Date(endDate), 'dd-MM-yyyy')
    const reset = () => {
      setStartDate(new Date());
      setEndDate(new Date());
      setAdult(1);
      setChild(0);
    };
    const handleSelect = (rangers: any) => {
      setStartDate(rangers.selection.startDate);
      setEndDate(rangers.selection.endDate);
    };
    const searchs = () => {{
      router.push({
        pathname: "/search",
        query: {
          destination_id: search,
          checkin_date : formatStartDate,
          checkout_date : formatEndDate,
          adults_number : adult,
          child_number : child,
          locale: "id_ID",
          currency: "IDR"
        }
      })
    }}
  return (
    <div>    
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ y: 0, opacity: 1 }}
            className="h-full w-full md:w-fit z-4 bg-white p-2 flex shadow-lg 
            rounded-lg flex-col col-span-3 mx-auto overflow-y-scroll"
          >
            <div className="flex flex-row items-center space-x-5">
                <HiXCircle className="w-8 h-8 cursor-pointer" />
                <div className="flex flex-row items-center space-x-4">
                <span className="text-lg font-bold cursor-pointer">Book Date</span>
                </div>
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-5 md:inline hidden outline-none my-3"
              placeholder="Where do you wanna go?"
            />
            <div>
                <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
                scroll={{ enabled: true }}
                className="w-full"
                />
            </div>
            <div className="flex flex-row items-center justify-between mb-2">
                <h1 className="font-semibold text-md">Adults</h1>
                <div className="flex flex-row items-center space-x-2">
                <FaUser />
                <input
                    value={adult}
                    onChange={(e) => setAdult(parseInt(e.target.value))}
                    min={1}
                    type="number"
                    className="w-12 border border-black pl-2 text-md text-red-500"
                />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between mb-2">
                <h1 className="font-semibold text-md">Children</h1>
                <div className="flex flex-row items-center space-x-2">
                <FaChild />
                <input
                    value={child}
                    onChange={(e) => setChild(parseInt(e.target.value))}
                    min={0}
                    type="number"
                    className="w-12 border border-black pl-2 text-md text-red-500"
                />
                </div>
            </div>
            <div className="flex mt-2 border-t border-gray-500">
                <button onClick={reset} className="flex-grow py-1 px-2">
                Cancel
                </button>
                <button className="flex-grow py-2 px-2 text-red-500" onClick={searchs}>Submit</button>
            </div>
          </motion.div>    
    </div>
  );
}

export default Modal