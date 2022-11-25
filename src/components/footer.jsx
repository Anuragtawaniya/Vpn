import React, { useState } from "react";
import style from "../style.css";
import logo from "../images/Logo.svg";
import Facebook from "../images/Facebook.svg";
import Twitter from "../images/Twitter.svg";
import Instagram from "../images/Instagram.svg";

function Footer(){
   


    return(
<>


<footer>
<div className="container flex">
<div className="link-column flex">
        <img src={logo} alt="" />
        <a href="" className="hover-link">LaslesVPN is a private virtual network that <br></br>has unique features and has high security</a>
        <div className="social">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
        </div>
        <a href="" className="hover-link">2020@LaslesVPN</a>
    </div>
    
    <div className="link-column flex">
        <h4>Product</h4>
        <a href="" className="hover-link">Download</a>
        <a href="" className="hover-link">Pricing</a>
        <a href="" className="hover-link">Server</a>
        <a href="" className="hover-link">Locations</a>
        <a href="" className="hover-link">Servers</a>
        <a href="" className="hover-link">Countries</a>
        <a href="" className="hover-link">Blog</a>
    </div>
    <div className="link-column flex">
        <h4>Engage</h4>
        <a href="" className="hover-link">LaslesVPN?</a>
        <a href="" className="hover-link">FAQ</a>
        <a href="" className="hover-link">Tutorials</a>
        <a href="" className="hover-link">About Us</a>
        <a href="" className="hover-link">Privacy Policy</a>
        <a href="" className="hover-link">Countries</a>
        <a href="" className="hover-link">Terms of Service</a>
    </div>
    <div className="link-column flex">
        <h4>Earn Money</h4>
        <a href="" className="hover-link">Affiliate</a>
        <a href="" className="hover-link">Become Partner</a>
  
     
    </div>
</div>

</footer>
</>
    )
}
export default Footer;
