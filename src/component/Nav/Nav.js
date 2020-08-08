import React from 'react'
import profile from '../../img/profile.jpg'
import './nav.scss';


const Nav = ( ) =>{
    const navMenu = [
        'home',
        'about',
        'work',
        'contact'
    ]
    return(
        <nav>
            <div className="profile">
                <img src={profile} alt="profile"/>
            </div>

            <div className="name">
               <a href='#header'> <h1> Jedidiah <span>John</span> </h1></a>
            </div>
            <div className="menu">
                <ul className="menu-item">
                    {
                        navMenu.map((menu) => {
                            const href = '#'+menu
                            return(
                                
                                <li className="menu-item-list">
                        
                                    <a href={href}>
                                        {menu}
                                    </a>
                                    <div className="bg"></div>
                                </li>
                            )
                        })
                    }
                   
                </ul>
            </div>
        </nav>
    )
}

export default Nav