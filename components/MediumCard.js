import React from 'react'
import Image from 'next/legacy/image'

function MediumCard({img, title}) {
  return (
    <div className='curson-pointer hover:scale-105 transform transition duration-300 ease-out'>

        <div className='relative w-80 h-80'>
            <Image className='rounded-xl' src={img} layout='fill' alt=''  />
        </div>
        <h1 className='text-2xl mt-3'>{title}</h1>

    </div>
  )
}

export default MediumCard 