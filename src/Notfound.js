import React from 'react';
import  {Link} from "react-router-dom"
function Notfound() {
  return <div className='not-found'>
   <p>the page cannot be found </p>
  <Link to ='/'>go back to home</Link>
  </div>;
}

export default Notfound;
