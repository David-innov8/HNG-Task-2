import React from 'react'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import play from '../../Assets/Play.svg'
function Body() {
  return (
    <div className='text-white w-[404px] py-[98px]'>
      <h1 className='font-bold text-5xl'>John Wick 3: <br/> Parabellum</h1>
      <div className='flex items-center py-3'>
        <img className="h-[14px] mr-3"  src="https://i.postimg.cc/ZRKH7tYT/imdb.png"/>
        <p className=' font-normal text-xs'>8.60/10.0</p>
        <img className="h-[14px] ml-8 mr-3"  src='https://i.postimg.cc/3xZ0Ny7w/Png-Item-1381056-1.png'/>
        <p className=' font-normal text-xs '>97%</p>
      </div>
      <p className=' text-lg font-medium pb-3'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
      <button className=' px-4 py-[6px] flex items-center rounded-[6px] bg-[#BE123C]'>
           <img src={play} alt=''/>
            <p className='text-sm ml-3'>Watch Trailer</p>
      </button>
    </div>
  )
}

export default Body
