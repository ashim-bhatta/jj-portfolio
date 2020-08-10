import React, { useState, useEffect } from 'react';
import './header.scss';

import bg from '../../video/bg.mp4'

const Header = ( ) => {
 
    // list of greading to display 
    const greading = ['hello','hi','hola','grasics']

    // current text displayed in screen
    const [ currentText, setCurrentText ] = useState()

    // choosing text
    var [ te, setTe ] = useState(0)

    // choosing string from text
    var [ po, setPo ] = useState(0)

    // typewriting effect
    const changeText = ( ) => {
        // starting text from start if it pass the limit
        if (greading.length == te ){
            setTe(te = 0)
        }
        // starting next text if previous text displayed
        if (greading[te].length <= po -1){
           setPo(po = 0)
           setTe(te + 1)
        }
        
        setCurrentText(greading[te].substring(0, po))
        setPo( po + 1)
    }

    // running function in every 500ms
    useEffect(() => {
        const timer = setTimeout(() =>changeText(), 500);
        return () => clearTimeout(timer);
      }, [po]);

    return(
        <header>
            <video autoPlay muted loop id="myVideo">
                <source src={bg} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="logo" id="header">
                    <a  href='#header'> <h1> JJ </h1></a>
                </div>
           <div className="content">
                <div className="greeting">
                    <h2 className="typing">{currentText}<span>|</span></h2>
                </div>
           </div>
        </header>
    )
}

export default Header