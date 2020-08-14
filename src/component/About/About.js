import React from 'react'

import './about.scss'

// cv
import cv from '../../cv/Resume.pdf'

import {FaGamepad, FaCoffee, FaCarSide, FaMoneyBillAlt, FaLaptop, FaPlane } from 'react-icons/fa';

const About = () => {
    const personalDetails = [
        {
            title : 'Birthdate',
            detail : '09-06-199'
        },
        {
            title : 'Phone',
            detail : '+977 9823345038'
        },
        {
            title : 'Email',
            detail : 'ashim.bhatta000@gmail.com'
        },
        {
            title : 'Website',
            detail : '-----'
        },
        {
            title : 'Job Status',
            detail : 'FreeLance'
        },
        // {
        //     title : 'Birthdate',
        //     detail : '09-06-199'
        // },
    ]

    const interests = [
        {
            icon : <FaGamepad className='icon-interest' />,
            name : 'game'
        },
        {
            icon : <FaCoffee className='icon-interest' />,
            name : 'coffee'
        },
        {
            icon : <FaCarSide className='icon-interest' />,
            name : 'car'
        },
        {
            icon : <FaMoneyBillAlt className='icon-interest' />,
            name : 'money'
        },
        {
            icon : <FaLaptop className='icon-interest' />,
            name : 'laptop'
        },
        {
            icon : <FaPlane className='icon-interest' />,
            name : 'plane'
        },
    ]
    return(
        <div id='about' className="about">
            <div className="title">
                <h1>
                    About me
                </h1>
            </div>

            <div className="content">
                    <p>
                        <span>
                            Hello! I'm Ashim. 
                        </span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis fuga, voluptatem excepturi corrupti ea dicta deserunt nam quasi quaerat aliquid cumque quos! Vel laborum, est porro quis architecto sequi! Quasi totam sed ab nisi eaque nobis, fugiat dignissimos quae rem enim velit suscipit, in, necessitatibus nostrum numquam tempore excepturi cupiditate?
                    </p>
               <div className="about-me">


                    <div className="personal-details">
                        <h2>
                            Personal Details
                        </h2>
                        {
                            personalDetails.map((pD) => {
                                return(
                                    <h3>
                                        <span>{pD.title}</span> {pD.detail}
                                    </h3>
                                )
                            })
                        }
                    </div>

                    <div className="my-interest">
                        <h2>
                            My Interest
                        </h2>
                        <div>
                        {
                            interests.map((mI) => {
                                return(
                                    <div className="interest">
                                        {mI.icon}
                                        <p>{mI.name}</p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
               </div>
            </div>
                <a href={cv} download>
                    <button className="btn-cv">
                                Get CV
                    </button>
                </a> 


        </div>
    )
}

export default About