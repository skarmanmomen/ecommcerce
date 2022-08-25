import React from 'react'
import gallery1 from "../images/gallery-1.jpg"
import FeatureProducts from './FeatureProducts'

const ProductDetails = () => {
    return (
        <>
            <div className="small-container single-product ">
                <div className="row">
                    <div className="col-2">
                        <img src={gallery1} width="100%" alt="" id="productImg" />
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img src="images/gallery-1.jpg" alt="" width="100%" className="smallImg" />
                            </div>
                            <div className="small-img-col">
                                <img src="images/gallery-4.jpg" alt="" width="100%" className="smallImg" />
                            </div>
                            <div className="small-img-col">
                                <img src="images/gallery-3.jpg" alt="" width="100%" className="smallImg" />
                            </div>
                            <div className="small-img-col">
                                <img src="images/gallery-4.jpg" alt="" width="100%" className="smallImg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <p>Home / T-Shirt</p>
                        <h1>Red Printed T-Shirt by HRX</h1>
                        <h4>$50.00</h4>
                        <select>
                            <option>Select Size</option>
                            <option>XXL</option>
                            <option>XL</option>
                            <option>Large</option>
                            <option>Medium</option>
                            <option>Small</option>
                        </select>
                        <input type="number" value="1" />
                        <a href="" className="btn">Add to cart</a>
                        <h3>Product Details <i className="fa  fa-indent"></i></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores dolore velit quod modi quasi ad,
                            fugiat eaque rerum harum.</p>

                    </div>
                </div>
            </div>

            {/* <!-- === title === --> */}
            <div className="small-container">
                <div className="row row-2">
                    <h2>Related Products</h2>
                    <p>View More</p>
                </div>
            </div>

            <FeatureProducts/>
        </>
    )
}

export default ProductDetails