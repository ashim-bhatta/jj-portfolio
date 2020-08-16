import React, { useState, useEffect } from 'react';
import './index.scss'
import { 
  BrowserRouter, 
  Route, 
  Link,
  Switch
}from 'react-router-dom'

import Nav from './component/Nav/Nav';
import Header from './component/Header/Header';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';


function App() {
  const [ isNavOpen, setIsNavOpen ] = useState(false)

  const toogleNav = ( ) => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact>
          <div className={ isNavOpen?' hamburger open' : 'hamburger'} onClick= {toogleNav}>
              <div className={ isNavOpen?' list list-1 open' : 'list list-1'}></div>
              <div className={ isNavOpen?' list list-2 open' : 'list list-2'}></div>
              <div className={ isNavOpen?' list list-3 open' : 'list list-3'}></div>
              <div className={ isNavOpen?' circle open' : 'circle'}></div>
          </div>
          <Nav isNavOpen = {isNavOpen} toogleNav = {toogleNav}/>
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
      </Route>
      <Route exact>
        not found
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;