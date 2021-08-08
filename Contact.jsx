import React from 'react';
import './index.css';

function Contact(){

    return(
        <div id='contact'>
            <h1>CONTACT US</h1>
          <form>
              <input type="text" placeholder="Full Name" required></input>
              <input type="email" placeholder="Full Name" required></input>
              <textarea placeholder="Write Here..." ></textarea>
              <input type="submit" value="Send" required></input>
                 </form>      
          
</div>
    )
}
export default Contact;