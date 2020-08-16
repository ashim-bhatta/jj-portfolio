import React from 'react';

import './contact.scss'
import Social from '../Social/Social';
const Contact = ( ) =>{
    var date = new Date(); 
    var year = date.getFullYear(); 
    return(
        <>
            <div className="contact" id="contact">
                <div className="title">
                    <h1>
                        Contact me
                    </h1>
                </div>
                <div className="contact-content">
                    <h2>Hello</h2>
                    <p>
                        What can I help you with?
                    </p>
                    <div className="buttons">
                        <div className="btn">Say Hello</div>
                        <span>or</span>
                        <div className="btn">Hire Me</div>
                    </div>
                    <p className='a'>For everything else</p>
                    <span>
                        ashim.bhatta000@gmail.com
                    </span>
                </div>
            </div>
            <footer>
                <a href="#home" className='up-btn'>UP</a>
                <div className="">
                    <Social />
                </div>
                <p>
                    <span>&#169;</span> Copyright {year} <span>Ashim</span>. All rights reserved.
                </p>
            </footer>
        </>
    )
}

export default Contact