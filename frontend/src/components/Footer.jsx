import React from 'react'
import apple from "../images/play-store.png"
import store from "../images/app-store.png"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Dowloads Our App</h3>
                            <p>Dowlaod our app for android and ios mobile phone.</p>
                            <div className="app-logo">
                                <img src={apple} alt="" />
                                <img src={store} alt="" />
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img src={store} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusamus facere iure error, non
                                hic.</p>
                        </div>
                        <div className="footer-col-3">
                            <h3>useful link</h3>
                            <ul>
                                <li>Cupons</li>
                                <li>Blog post</li>
                                <li>Return policy</li>
                                <li>Join affiliate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Follow us</h3>
                            <ul>
                                <li>facebook</li>
                                <li>Instagram</li>
                                <li>Twiter</li>
                                <li>youTube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">Copyright 2022 - Easy Tutorial</p>
                </div>
            </div>

        </>
    )
}

export default Footer