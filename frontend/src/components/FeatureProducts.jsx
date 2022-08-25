import React from 'react'
import product1 from "../images/product-1.jpg"
import product2 from "../images/product-2.jpg"
import product3 from "../images/product-3.jpg"


const FeatureProducts = () => {
    return (
        <>
            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t-shirt</h4>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product2} alt="" />
                        <h4>Red Printed t-shirt</h4>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product3} alt="" />
                        <h4>Red Printed t-shirt</h4>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product2} alt="" />
                        <h4>Red Printed t-shirt</h4>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProducts