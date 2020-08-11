import React, { useState, useEffect } from 'react';
import './index.scss'

import Nav from './component/Nav/Nav';
import Header from './component/Header/Header';
import About from './component/About/About';


function App() {
  const [ isNavOpen, setIsNavOpen ] = useState(false)

  const toogleNav = ( ) => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div className="App">
      <div className={ isNavOpen?' hamburger open' : 'hamburger'} onClick= {toogleNav}>
        <div className={ isNavOpen?' list list-1 open' : 'list list-1'}></div>
        <div className={ isNavOpen?' list list-2 open' : 'list list-2'}></div>
        <div className={ isNavOpen?' list list-3 open' : 'list list-3'}></div>
        <div className={ isNavOpen?' circle open' : 'circle'}></div>
      </div>
      <Nav isNavOpen = {isNavOpen} toogleNav = {toogleNav}/>
      <Header />
     <About />
    </div>
  );
}

export default App;