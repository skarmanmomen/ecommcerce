import { React, useState, useEffect } from 'react'

import logo from "../images/logo.png"
import cart from "../images/cart.png"
import menu from "../images/menu.png"
import image1 from "../images/image1.png"
import { NavLink } from "react-router-dom"



const Header = () => {

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
            <div className="header" style={{ background: "white" }}>
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src={logo} alt="logo" width="120px" />
                        </div>
                        <nav>
                            <ul id="menuItems">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/products">Products</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/account">Account</NavLink></li>
                            </ul>
                        </nav>
                        <NavLink to="/cart">
                            <img src={cart} alt="cart" width="30px" height="30px" />
                        </NavLink>


                        <img className="menu-icon" src={menu} alt="" onClick={menuToggle} />

                    </div>


                </div>
            </div>
        </>
    )
}

export default Header