import React, { useState } from "react";
import style from "../style.css";
import Man from "../images/man.svg";
import Green from "../images/green.svg";

function Features(){
   


    return(
    <main className="flex main" >
<div className="box1">
<img src={Man} alt="" />
</div>
<div className="hero-content">
<h1>We Provide Many Features You Can Use</h1>
<p>You can explore the features that we provide with fun and have their own functions each feature</p>

<ul>
   <li>  <img src={Green}  className="green-icon" alt="" /> Powerfull online protection</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Internet without borders.</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Supercharged Vpn</li>
   <li>  <img src={Green}  className="green-icon" alt="" />No specific time limits.</li>

</ul>
</div>
           
    </main>
    )
}
export default Features;