import React from 'react'
import profile from '../../img/profile.jpg'
import './nav.scss';


const Nav = ( {isNavOpen, toogleNav} ) =>{
    const navMenu = [
        'home',
        'about',
        'work',
        'contact'
    ]

    return(
        <div className={isNavOpen==true ? 'nav open': 'nav'}>
           <div className="menu">
               <ul className="menu-list">
                    {
                        navMenu.map((menu) => {
                            const href = "#"+menu
                            return(
                                <a href={href} >
                                    <li className="menu-list-item" onClick={toogleNav}>
                                        <a href={href}>
                                            {menu}
                                        </a>
                                        <div className="bg"></div>
                                    </li>
                                </a>
                            )
                        })
                    }
               </ul>
           </div>
        </div>
    )
}

export default Nav