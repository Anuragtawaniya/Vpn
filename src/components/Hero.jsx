import React, { useState } from "react";
import style from "../style.css";
import HeroImage from '../images/Illustration 1.svg';

function Hero(){
   


    return(
    <main>
            <section className="hero flex">
        <div class="hero-content">
          <h1>Want anything to be easy with <strong>LaslesVpn.</strong></h1>
          <p>Provide a network for all your needs with ease and fun using LaslesVpn discover features from us.</p>
          <button className="btn">Get Started</button>
        </div>
     
        <div className="hero-img">
        <img src={HeroImage} alt="" />
        </div>
    </section> 
    </main>
    )
}
export default Hero;