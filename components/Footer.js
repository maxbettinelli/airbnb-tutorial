import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-900'>

        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold'>CODE TOOLS</h5>
            <p>NextJS</p>
            <p>React</p>
            <p>TailwindCSS</p>
            <p>VS Code</p>
            <p>JavaScript</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>For my portfolio</p>
            <p>Do not go gentle</p>
            <p>Into that goodnight</p>
            <p>Rage, Rage, against</p>
            <p>The dying of the light</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold'>HACKATHONS</h5>
            <p>Online</p>
            <p>Berkeley</p>
            <p>Barcelona</p>
            <p>San Francisco</p>
            <p>San Luis Obispo</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Shaken, not stirred</p>
            <p>No Donk Bets</p>
            <p>Family first</p>
            <p>Signing off</p>
        </div>
    </div>
  )
}

export default Footer