import React  from 'react';
import './header.scss';

import bg from '../../video/bg.mp4'
import profile1 from '../../img/profile-1.png'


// icon
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';


const Header = ( ) => {
 
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
        <header id="home">
            <video autoPlay muted loop id="myVideo">
                <source src={bg} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="logo" id="header">
                    <a  href='#header'> <h1>  a</h1></a>
                </div>
           <div className="content">
                
                <div className={{position : 'relative'}}>
                    <div className="profile">
                        <img src={profile1} alt="profile "/>
                    </div>
                    <div className="text">
                        <h1>
                            Ashim Bhatta
                        </h1>
                        <p>
                            A creative Freelancer & Front End Developer
                        </p>

                        <a href="#about" ><button className='btn'> About Me</button></a>
                    </div>

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
                </div>
           </div>
        </header>
    )
}

export default Header