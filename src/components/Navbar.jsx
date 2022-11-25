import React, { useState } from "react";
import logo from "../images/Logo.svg";
import style from "../style.css";
import {FaBars,FaTimes} from "react-icons/fa";
import {useRef} from "react";
function Navbar(){
   const navRef = useRef();
   const showNavbar = () =>{
    document.querySelector(".menu").style.height="100%";
   }
   const HideNavbar = () =>{
    document.querySelector(".menu").style.height="0";
   }


    return(
    <nav className="flex">
<a href="">
    <img src={logo} alt="" />
    
</a>
<ul className="menu">
    <li><a href="#">About</a></li>
    <li><a href="#">Features</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Testimonials</a></li>
    <li><a href="#">Help</a></li>
    <li> <a href="">SignIn</a></li>
    <li> <a href="" class="btn-border">SignUp</a></li>

   
   

    <button className="nav-btn nav-close-btn" onClick={HideNavbar}>
    <FaTimes/>
</button>
</ul>



<button className="nav-btn open" onClick={showNavbar}>
    <FaBars/>
</button>
    </nav>
    )
}
export default Navbar;