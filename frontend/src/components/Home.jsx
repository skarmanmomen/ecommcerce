import React, { useEffect, useRef, useState } from 'react'
import logo from "../images/logo.png"
import cart from "../images/cart.png"
import menu from "../images/menu.png"
import image1 from "../images/image1.png"

import Categories from './Categories'
import FeatureProducts from './FeatureProducts'
import LatestProduct from './LatestProduct'
import Offer from './Offer'
import Testimonial from './Testimonial'
import Brand from './Brand'
import Footer from './Footer'


const Home = () => {
  let menus = document.getElementById("menuItems")

  const [menuItems, setMenuItem] = useState(0)

  useEffect(() => {
    setMenuItem(menus)
  }, [menus])

  function menuToggle() {

    if (menuItems.style.maxHeight == "0px") {
      menuItems.style.maxHeight = "90vh"
    }
    else {
      menuItems.style.maxHeight = "0px"
    }

  }


  return (
    <>
      <div className="header">
        <div className="container">
          {/* <div className="navbar">
            <div className="logo">
              <img src={logo} alt="logo" width="120px" />
            </div>
            <nav>
              <ul id="menuItems">
                <li><a href=" ">Home</a></li>
                <li><a href=" ">Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href=" ">Account</a></li>
              </ul>
            </nav>
            <img src={cart} alt="cart" width="30px" height="30px" />
            <img className="menu-icon" src={menu} alt="" onClick={menuToggle} />
          </div> */}

          <div className="row">
            <div className="col-2">
              <h1>Give Your WorkOut <br /> A New style!</h1>
              <p>Success isn't always about greatness. I'ts about consistency. Consistent hard work gain
                success.
                Greateness will come. </p>
              <a href="" className="btn">Expole now &#8594;</a>
            </div>
            <div className="col-2">
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
      </div>


      <Categories />
      <FeatureProducts />
      <LatestProduct />
      <Offer />
      <Testimonial />
      <Brand />
      <Footer />



    </>
  )
}

export default Home