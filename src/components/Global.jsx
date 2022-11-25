
import React, { useState } from "react";
import style from "../style.css";
import Image from "../images/Huge Global.svg";
import Mask1 from "../images/Mask Group (1).svg";
import Mask2 from "../images/Mask Group (2).svg";
import Mask3 from "../images/Mask Group (3).svg";
import Mask4 from "../images/Mask Group (4).svg";


function Global(){
   


    return(
 <>
 
<section className="heading">
 <h1>Huge Global Netword of Fast VPN</h1>
 <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
    </section>
    <section className="global flex">
        <img src={Image} alt="" />
    </section>

<section className="companyLogo flex">
<img src={Mask1} alt="" />
<img src={Mask2} alt="" />
<img src={Mask3} alt="" />
<img src={Mask4} alt="" />
</section>

 </>
    )
}
export default Global;

