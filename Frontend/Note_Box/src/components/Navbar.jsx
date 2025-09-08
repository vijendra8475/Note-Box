import React from 'react'
import HeroLogo from './HeroLogo'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[90%] text-black py-2 px-12 bg-white flex items-center justify-between rounded-b-2xl fixed top-0 left-1/2 transform -translate-x-1/2 shadow-md z-10'>
      
      <HeroLogo />

      <ul className='sm:flex gap-5 hidden text-sm text-gray-600'>

            <NavLink to={'/'} className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-1/2 border-none h-[1.5px] bg-gray-500 hidden' />
            </NavLink>
             <NavLink to={'/collection'} className='flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-1/2 border-none h-[1.5px] bg-gray-500 hidden' />
            </NavLink>
            <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-1/2 border-none h-[1.5px] bg-gray-500 hidden' />
            </NavLink>
            <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-1/2 border-none h-[1.5px] bg-gray-500 hidden' />
            </NavLink>
        </ul>


      <div className="right flex items-center gap-4">
        <div className="icon h-7 w-7 flex items-center justify-center text-base border-1 rounded-full border-slate-500"><i className="ri-search-line"></i></div>
        <NavLink to={'/cart'} className="icon h-7 w-7 flex items-center justify-center text-base border-1 rounded-full border-slate-500"><i className="ri-shopping-cart-2-fill"></i></NavLink>
      </div>
    </div>
  )
}

export default Navbar