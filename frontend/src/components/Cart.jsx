import React from 'react'
import buyimg1 from "../images/buy-1.jpg"

const Cart = () => {
    return (
        <>
            <div className="small-container card-page">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={buyimg1} alt="" />
                                <div>
                                    <p>Red printed T-shirt</p>
                                    <small>price: $50.00</small>
                                    <br />
                                    <a href="">remove</a>
                                </div>

                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$50.00</td>
                    </tr>
                    
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={buyimg1} alt="" />
                                <div>
                                    <p>Red printed T-shirt</p>
                                    <small>price: $50.00</small>
                                    <br />
                                    <a href="">remove</a>
                                </div>

                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$50.00</td>
                    </tr>
                    
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={buyimg1} alt="" />
                                <div>
                                    <p>Red printed T-shirt</p>
                                    <small>price: $50.00</small>
                                    <br />
                                    <a href="">remove</a>
                                </div>

                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$50.00</td>
                    </tr>

                </table>

                <div className="totalPrice">
                    <table>
                        <tr>
                            <td>subtotal</td>
                            <td>$0.55</td>
                        </tr>
                        <tr>
                            <td>tax</td>
                            <td>$4.55</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td>$6.55</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Cart