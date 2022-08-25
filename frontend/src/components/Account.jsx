import React, { useEffect, useState } from 'react'
import img1 from "../images/image1.png"
import Footer from './Footer'

const Account = () => {
    let loginForm = document.getElementById("loginForm")
    let registerForm = document.getElementById("registerForm")
    let indicator = document.getElementById("indicator")
    const [loginFormId, setLoginFormId] = useState("")
    const [registerFormid, setregisterFormid] = useState("")
    const [indicatorID, setindicatorid] = useState("")

    useEffect(() => {
        setLoginFormId(loginForm)
        setregisterFormid(registerForm)
        setindicatorid(indicator)

    }, [loginForm, registerForm, indicator])

    function login(e) {
      
    

        loginFormId.style.transform = "translateX(300px)"
        registerFormid.style.transform = "translateX(300px)"
        indicatorID.style.transform = "translateX(0)"
    }
    function register() {
        loginFormId.style.transform = "translateX(0)"
        registerFormid.style.transform = "translateX(0)"
        indicatorID.style.transform = "translateX(100px)"
    }

    return (
        <>
            <div className="account-page">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src={img1} alt="" />
                        </div>
                        <div className="col-2">
                            <div className="form-container">
                                <div className="form-btn">
                                    <span onClick={login}>Login</span>
                                    <span onClick={register}>Register</span>
                                    <hr id="indicator" />
                                </div>
                                {/* <!-- ------ Login ------ --> */}

                                <form id="loginForm">
                                    <input type="text" placeholder="Username" />
                                    <input type="password" placeholder="Password" />
                                    <button className="btn"> Login</button>
                                    <a href="">Forget Password</a>
                                </form>
                                {/* <!-- ---------- register ------- --> */}
                                <form id="registerForm">
                                    <input type="text" placeholder="Username" />
                                    <input type="text" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button className="btn"> Register</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Account