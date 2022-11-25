import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Icon from "./Icon";
import Features from "./Features";
import Plan from "./Plan";
import Global from "./Global";
import Footer from "./footer";

import Sub from "./Sub";
import Test from "./Testi";

function Header(){
  
    return(
        <div>
<Navbar />
<Hero />
<Icon />
<Features />
<Plan />
<Global />
<Test />
<Sub />
<Footer />
        </div>
    )
}
export default Header;