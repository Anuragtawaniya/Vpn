import React, { useState } from "react";
import style from "../style.css";
import Free from "../images/Free.svg";
import Green from "../images/green.svg";

function Plan(){
   
    return(
<>

<section className="heading">
 <h1>Choose Your Plan</h1>
 <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
    </section>
<section className="Plan flex">

<div className="card">
   <div>
   <img src={Free} alt="" /><br/>
    <h4>Free Plan</h4>
   </div>
   <div className="card-content">
   <ul>
   <li>  <img src={Green}  className="green-icon" alt="" /> Powerfull online protection</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Internet without borders.</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Supercharged Vpn</li>
   <li>  <img src={Green}  className="green-icon" alt="" />No specific time limits.</li>

</ul>

   <div className="card-bottom">
   <h2>Free</h2><br/>
    <a href="" class="btn-border">Select</a>
   </div>

</div>
</div>
<div className="card">
   <div>
   <img src={Free} alt="" /><br/>
    <h4>Premium Plan</h4>
   </div>
   <div className="card-content">
   <ul>
   <li>  <img src={Green}  className="green-icon" alt="" />Unlimited Bandwitch</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Encrypted Connection</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Yes Traffic Logs</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Work on All Devices.</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Connect Anyware</li>

</ul>

   <div className="card-bottom">
   <h2>$9<span className="plan-detail">/mo</span></h2><br/>
    <a href="" class="btn-border">Select</a>
   </div>

</div>
</div>

<div className="card">
   <div>
   <img src={Free} alt="" /><br/>
    <h4>Standard Plan</h4>
   </div>
   <div className="card-content">
   <ul>
   <li>  <img src={Green}  className="green-icon" alt="" />Unlimited Bandwitch</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Encrypted Connection</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Yes Traffic Logs</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Work on All Devices.</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Connect Anyware</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Get New Features</li>


</ul>

   <div className="card-bottom">
   <h2>$12 <span className="plan-detail">/mo</span></h2><br/>
    <a href="" class="btn-border">Select</a>
   </div>

</div>
</div>



</section>
</>


    )
}
export default Plan;