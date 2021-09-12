import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
    
    return(
       
     <div className="header">
         <Link to="/"><img src="img/MOS-logo.png"
         className="logo"/></Link>

         <ul className="icons">
             <li><a href="#">ABOUT</a></li>
             <li><a href="#">NOTICE</a></li>
             <li><a href="#">PHOTO</a></li>
             <li><a href="#">DATA</a></li>
             <li><a href="#">ACOOUNT</a></li>
         </ul>
         
        <div className="login-button">
            <button className="login-text"><Link to="/LOGIN" className="login" href="#">LOGIN</Link></button>
        </div>
     </div>
     
    )
}

export default Nav;