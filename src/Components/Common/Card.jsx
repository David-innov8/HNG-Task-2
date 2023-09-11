import React from 'react'
import cardimg from '../../Assets/card11.png'
import imdb from'../../Assets/imdb.png'
function Card() {
  return (
    <div className='w-[250px]  bg-red-400'>
        <img src={cardimg} alt=''/>
        <p className='text-xs font-bold my-2 text-[#9CA3AF]'>USA, 2016 - Current</p>
        <p className='text-lg font-bold'>Stranger Things</p>
        <div className='flex justify-between my-3'>
            <div className='flex items-center'>
                <img className="h-[14px] mr-3"  src="https://i.postimg.cc/ZRKH7tYT/imdb.png"/>
             <p className='text-xs font-normal'>86.0 / 100</p>
            </div>
        <div className='flex items-center'>
             <img className="h-[14px] ml-8 mr-3"  src='https://i.postimg.cc/3xZ0Ny7w/Png-Item-1381056-1.png'/>
        <p className=' font-normal text-xs '>97%</p>
        </div>
            
        </div>
        <p className='text-xs font-bold text-[#9CA3AF]'>Action, Adventure / Horror</p>
    </div>
  )
}

export default Card
