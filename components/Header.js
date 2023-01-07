import React from 'react'
import Image from 'next/legacy/image'
import { Bars3Icon, GlobeAltIcon, MagnifyingGlassCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function Header() {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'Selection'
    }



  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

        {/* Left Hand Div */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                src='https://links.papareact.com/qd3'
                layout = 'fill'
                objectFit='contain'
                objectPosition='left'
                alt=""
            />
        </div>


        {/* Middle Hand Div */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input value={searchInput} 
                    onChange ={(e) => setSearchInput(e.target.value)}
                    className=' flex-grow pl-5 bg-transparent outline-none text-gray-700 placeholder-gray-500' type="text" placeholder='Start your search'></input>
            <MagnifyingGlassCircleIcon className='hidden md:inline-flex text-black h-8 bg-red-300 rounded-full p-1 cursor-pointer md:mx-2'/>
        </div>


        {/* Right Hand Div */}
        <div className='flex items-center space-x-4 justify-end text-gray-500'>
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer'/>   

            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <Bars3Icon className='h-6'/>
                <UserCircleIcon className='h-6' />
            </div> 
        </div>

        { searchInput && <div className=' bg-white text-black'>
                <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#FD5B61"]}
                    // pause 2:33:17
                />

            </div>}
        
    </header>
  )
}

export default Header