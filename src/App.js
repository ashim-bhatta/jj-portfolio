import React, { useState, useEffect } from 'react';
import './index.scss'

import Nav from './component/Nav/Nav';
import Header from './component/Header/Header';


function App() {
  const [ isNavOpen, setIsNavOpen ] = useState(false)

  return (
    <div className="App">
      <div className={ isNavOpen?' hamburger open' : 'hamburger'} onClick= {() => setIsNavOpen(!isNavOpen)}>
        <div className={ isNavOpen?' list list-1 open' : 'list list-1'}></div>
        <div className={ isNavOpen?' list list-2 open' : 'list list-2'}></div>
        <div className={ isNavOpen?' list list-3 open' : 'list list-3'}></div>
        <div className={ isNavOpen?' circle open' : 'circle'}></div>
      </div>
      <Nav isNavOpen = {isNavOpen}/>
      <Header />
      
    </div>
  );
}

export default App;