import React, { useState } from 'react';
import fimage0 from '../src/images/logo.png';

import './index.css';
import {Link} from 'react-scroll';
function Navbar(){

    const [nav,setnav]=useState(false);
    const changeBackground=()=>{
        if(window.screenY>=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
        window.addEventListener('scroll',changeBackground);
return(
    <nav className={nav?"nav active":"nav"}>
<Link to="main" className='logo'> 
    <img src={fimage0}/>
</Link>
<input className='menu-btn' type='checkbox'></input>
<label className="menu-btn" for='menu-btn'>
    <span className='nav-icon'></span>
</label>

<ul>
<li><Link to='main'>Online Book</Link></li>
<li><Link to='features'>Features</Link></li>
<li><Link to='presentation'>Offer</Link></li>
<li><Link to='about'>About</Link></li>
<li><Link to='contact'>Contact</Link></li>

</ul>
</nav>

)
    }
export default Navbar;