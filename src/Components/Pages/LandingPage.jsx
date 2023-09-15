import React from 'react'
import Navbar from '../Common/Navbar'
import Body from '../Hompegae/Body'
import { useApi } from '../../Api/Context'
function LandingPage() {

  const apidata= useApi()

    const bgImgUrl = "https://i.postimg.cc/3Nmn5bYb/Poster.png"
    const style = {
        backgroundImage: `url(${bgImgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

   



  return (
    <div className='h-screen  px-[90px] ' style={style}>
      <Navbar/>
      <Body/>
     
    </div>
  )
}

export default LandingPage
