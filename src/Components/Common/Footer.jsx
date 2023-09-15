import React from 'react'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (

    <div className='w-full  flex justify-center'>

   
    <div className='w-[492px]  mt-[100px] mb-[72px]'>
        <div className='px-10 justify-center flex gap-x-[48px]'>
            <FontAwesomeIcon className='h-[28px]' icon={faFacebookSquare}/>
      <FontAwesomeIcon className='h-[28px]' icon={faInstagramSquare}/>
      <FontAwesomeIcon className='h-[28px]' icon={faTwitterSquare}/>
      <FontAwesomeIcon className='h-[28px]' icon={faYoutubeSquare}/>
        </div>
        <div className='flex justify-between my-[36px]  text-lg font-bold'>
            <p>Conditions Of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
      
      <p className='text-lg font-bold flex justify-center text-[#6B7280]'>© 2021 MovieBox by Adriana Eka Prayudha</p>

    </div>
    </div>
  )
}

export default Footer
