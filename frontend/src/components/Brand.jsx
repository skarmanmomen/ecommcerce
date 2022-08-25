import React from 'react'
import cocacola from "../images/logo-coca-cola.png"
import godrej from "../images/logo-godrej.png"
import oppo from "../images/logo-oppo.png"
import philips from "../images/logo-philips.png"
const Brand = () => {
    return (
        <>
            <div className="brand">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src={cocacola} alt="" />
                        </div>
                        <div className="col-5">
                            <img src={godrej} alt="" />
                        </div>
                        <div className="col-5">
                            <img src={oppo} alt="" />
                        </div>
                        <div className="col-5">
                            <img src={philips} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand