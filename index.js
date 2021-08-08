import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import Feature from './Feature.jsx';
import Offer from './Offer';
import About from './About.jsx';
import Contact from './Contact';


ReactDOM.render(
 <>
 
 <div className="App">
 
 <Navbar/>
 <Header/>
 <Feature/>
 <Offer/>
 <About/>
 <Contact/>
 </div>
 
 </>,
  document.getElementById('root')
);
