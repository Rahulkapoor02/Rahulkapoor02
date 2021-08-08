import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../src/images/1.svg';
import fimage2 from '../src/images/2.svg';
import fimage3 from '../src/images/3.svg';
import fimage4 from '../src/images/4.svg';

import './index.css';

function Feature(){

    return(
 <div id='features'>
  <h1>Features</h1>
  <div className='a-container'>
      <Featurebox image={fimage1} title="WeightLifting"/>
      <Featurebox image={fimage2} title="WeightLifting"/>
      <Featurebox image={fimage3} title="WeightLifting"/>
      <Featurebox image={fimage4} title="WeightLifting"/>

  </div>
 </div>

)
}
export default Feature;