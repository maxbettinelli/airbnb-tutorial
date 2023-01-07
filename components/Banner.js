import React from 'react'
import Image from 'next/legacy/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]'>
        <Image
            src="https://links.papareact.com/0fm"
            layout = "fill"
            alt=""
            objectFit="cover"
        />

        <div className='absolute top-1/2 w-full text-center text-black'>
            <p className='text-sm md:text-lg'>
                Not sure where to go??? Try these.
            </p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150'>I am flexible</button>
        </div>

    </div>

    
  )
}

export default Banner