import React, { useState } from "react";
import style from "../style.css";
import User from '../images/user.svg'
import Location from "../images/location.svg";
import Server from "../images/server.svg";

function Icon(){
   


    return(
    <main className="flex box-main">
           <div className="box border">
<img src={User} alt="" />
<div>
    <span>90+</span><br /><span>Users</span>
</div>
           </div>
           <div className="box border">
<img src={Location} alt="" />
<div>
    <span>30+</span><br /><span>Locations</span>
</div>
           </div>
           <div className="box">
<img src={Server} alt="" />
<div>
    <span>50+</span><br /><span>Servers</span>
</div>
           </div>
           
    </main>
    )
}
export default Icon;