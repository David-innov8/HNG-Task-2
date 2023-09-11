import React from 'react'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../Assets/Logo.svg'
function Navbar() {
  return (
    <div className='flex h-[70px] justify-between items-center  '>
        <div className="logo flex">
            <img src={logo} alt=''/>
        </div>

        <div className="relative w-[525px] text-whites">
        <input
            type="text"
            className="w-full h-10 px-5 pr-10 rounded-lg border  border-white text-sm focus:outline-none bg-transparent"
            placeholder="What do you want to watch?"
/>

      <div className="absolute  right-0 top-0 mt-3 mr-4">
        <FontAwesomeIcon icon={faSearch} color='white'/>
      </div>
    </div>

        <div className="signUp flex">
            <p className='text-white mr-5'>Sign In</p>
            <FontAwesomeIcon className='p-1  bg-red-400 rounded-full' icon={faHamburger} color='white'/>
        </div>

    </div>
  )
}

export default Navbar
