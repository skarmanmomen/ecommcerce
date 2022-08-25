import React, { useState } from 'react'
import user1 from "../images/user-1.png"
import user2 from "../images/user-2.png"
import user3 from "../images/user-3.png"
import user4 from "../images/user-2.png"


const Testimonial = () => {
    const [users, setUsers] = useState([
        {
            img: user1
        },
        {
            img: user2
        },
        {
            img: user3
        },
        {
            img: user4
        }
    ])

    return (
        <>
            <div className="testimonial">
                <div className="small-container">
                    <div className="row">
                        {
                            users && users.map((user) => (
                                <div className="col-3">
                                    <i className="testimonialaquoute fa fa-quote-left"></i>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero inventore nihil praesentium
                                        dolor saepe. Accusantium.</p>
                                    <div className="rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <img className="testimonialimg" src={user.img} alt="" />
                                    <h3>Sean Parker</h3>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial