import React, { useState } from 'react'
import product4 from "../images/product-4.jpg"
import product5 from "../images/product-5.jpg"
import product6 from "../images/product-6.jpg"
import product7 from "../images/product-7.jpg"
import product8 from "../images/product-8.jpg"
import product9 from "../images/product-9.jpg"
 

import  {NavLink} from "react-router-dom"



const LatestProduct = () => {
    const [prodcuts, setProducts] = useState([
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product4
        },
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product5
        },
        {
            name: "Red Printed t-shirt",
            price: "50.600",
            img: product6
        }
        ,
        {
            name: "Red Printed t-shirt",
            price: "10.600",
            img: product7
        },
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product8
        },
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product9
        },
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product9
        },
        {
            name: "Red Printed t-shirt",
            price: "50.600",
            img: product6
        },
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product4
        },
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product4
        },
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product5
        },
        {
            name: "Red Printed t-shirt",
            price: "50.600",
            img: product6
        }
        ,
        {
            name: "Red Printed t-shirt",
            price: "10.600",
            img: product7
        },
        {
            name: "Red Printed t-shirt",
            price: "450.600",
            img: product8
        },

    ])

    return (
        <>
            <div className="small-container">
                <h2 className="title">Latest Products</h2>
                <div className="row">
                    {
                        prodcuts && prodcuts.map((p) => {

                            return (
                                <div className="col-4" style={{ cursor: "pointer" }}>
                                    <NavLink to="/productsDetails">
                                        <img src={p.img} alt="" />
                                    </NavLink>
                                    <h4>{p.name}</h4>
                                    <div className="rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <p>{p.price}</p>
                                </div>
                            )
                        })
                    }


                </div>
            </div>


        </>
    )
}

export default LatestProduct