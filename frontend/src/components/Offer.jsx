import React from 'react'

import exclusiveimg from "../images/exclusive.png"

const Offer = () => {
  return (
   <>
    <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img className="offerimg" src={exclusiveimg} alt=""/>
                </div>
                <div className="col-2">
                    <p>exclusively available on redstore</p>
                    <h1>smart brand 4</h1>
                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo fugit tempora er eniet
                        accusantium rem numquam a molestias minus voluptatem illo molestias minus
                        voluptatem illo voluptate neque hic officia ipsa, ad culpa. </small> <br/>
                    <a href="" className="btn">buy now &#8594;</a>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Offer