import React from 'react'
import Navbar from '../Common/Navbar'
import Body from '../Hompegae/Body';
import Card from '../Common/Card';
import Products from '../Hompegae/Products';
import LandingPage from './LandingPage';
import Footer from '../Common/Footer';
function Homepage() {

    // const bgImgUrl = "https://i.postifmg.cc/3Nmn5bYb/Poster.png"
    // const style = {
    //     backgroundImage: `url(${bgImgUrl})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   };


  return (
    <div>

      
<LandingPage/>
      <Products/>
      <Card/>
     
      <Footer/>
    </div>
  )
}

export default Homepage
