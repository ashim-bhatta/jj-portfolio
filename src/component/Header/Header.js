import React  from 'react';
import './header.scss';

import bg from '../../video/bg.mp4'
import profile1 from '../../img/profile-1.png'

import Social from '../Social/Social';


const Header = ( ) => {
 
    
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
                    <Social />
                </div>
           </div>
        </header>
    )
}

export default Header