import React, { useState } from 'react'
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import './social.scss'
const Social = ( ) => {
    const social = [
        {
            icon : FiInstagram,
            url : 'http://instaram.com/ashim_bhatta',
            class : 'icon-insta'
        },
        {
            icon : FiTwitter,
            url : 'http://instaram.com/ashim_bhatta',
            class : 'icon-twitter'
        },
        {
            icon : FiGithub,
            url : 'http://instaram.com/ashim_bhatta',
            class : 'icon-git'
        },
        {
            icon : FiLinkedin,
            url : 'http://instaram.com/ashim_bhatta',
            class : 'icon-linkedin'
        },
    ]
    return(
        <div className="social-handel">
            {
                social.map((ic) => {
                    return(
                        <div className='single-social' key={ic.class}>
                            <a href={ic.url} target="_blank">
                                <ic.icon className='icon'/>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Social