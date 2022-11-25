import React from "react";
import Test1 from "../images/img.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Test() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
  return (
    <>
     
<section className="heading">
 <h1>Trusted by Thousands of Happy Customer</h1>
 <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature</p>
    </section>


   



             
 
 <main>
             

   
 <Slider {...settings}>
           
           <div className="client-card">
              
        

              <div className="client-profile flex">
                  <img src={Test1} alt="" />
                  <div className="client-name">
                      <h6>Viezh Robert</h6>
                      <span>Warsaw,Poland</span>
                  </div>
                  <div className="client-feedback">
                      <h6>4.5</h6>
                    
                  </div>
              </div>
              <div className="client-data">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veniam, expedita quo quam </p>
              </div>
              
               
                  
           </div>
       
{/* 2 */}
<div className="client-card">
              
        

              <div className="client-profile flex">
                  <img src={Test1} alt="" />
                  <div className="client-name">
                      <h6>Viezh Robert</h6>
                      <span>Warsaw,Poland</span>
                  </div>
                  <div className="client-feedback">
                      <h6>4.5</h6>
                    
                  </div>
              </div>
              <div className="client-data">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veniam, expedita quo quam </p>
              </div>
              
               
                  
           </div>


           {/* 3 */}

           <div className="client-card">
              
        

              <div className="client-profile flex">
                  <img src={Test1} alt="" />
                  <div className="client-name">
                      <h6>Viezh Robert</h6>
                      <span>Warsaw,Poland</span>
                  </div>
                  <div className="client-feedback">
                      <h6>4.5</h6>
                    
                  </div>
              </div>
              <div className="client-data">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veniam, expedita quo quam </p>
              </div>
              
               
                  
           </div>

           {/* 4 */}
           <div className="client-card">
              
        

              <div className="client-profile flex">
                  <img src={Test1} alt="" />
                  <div className="client-name">
                      <h6>Viezh Robert</h6>
                      <span>Warsaw,Poland</span>
                  </div>
                  <div className="client-feedback">
                      <h6>4.5</h6>
                    
                  </div>
              </div>
              <div className="client-data">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veniam, expedita quo quam </p>
              </div>
              
               
                  
           </div>


         </Slider>

 </main>
   
    </>
  );
}
