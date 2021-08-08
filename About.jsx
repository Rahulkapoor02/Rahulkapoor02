import React from 'react';
import aboutimage from '../src/images/about.png';
import './index.css';

function About(){

    return(
        <div id='about'>
           <div className='about-image'>
                 <img src={aboutimage} alt=''/> 
                 </div>
                 <div className="about-text">
                 <h1>LEARN MORE ABOUT US</h1>
                 <p >RK GYM</p>
                <button>READ MORE</button>
                  </div>
</div>

    )
}
export default About;