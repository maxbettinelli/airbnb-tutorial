import React from 'react'
import Image from 'next/legacy/image'

function SmallCard({img, location, distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-900 hover:scale-105 transition-transform duration-200 ease-out'>

        {/* left */}
        <div className='relative h-16 w-16'>
            <Image className='rounded-lg' src={img} alt="" layout='fill'></Image>
        </div>

        {/* right */}
        <div>
            <h2>{location}</h2>
            <h3 className=' text-gray-500'>{distance}</h3>
        </div>

    </div>
  )
}

export default SmallCard