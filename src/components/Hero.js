import React from "react";
import "./Herostyle.css";

import { NavLink } from "react-router-dom";

 export function Hero(){
    return(
        <>
        <div className="hero">
            <img src="https://img.freepik.com/free-vector/light-wave-border-background_53876-67163.jpg?size=626&ext=jpg&ga=GA1.1.1489585033.1682354753&semt=robertav1_2_sidr
"  alt="surveyimg" />
            <div className="hero-text" >
            <h1>Survey,Simpler,Smarter</h1>
            <p>Get your survey done with us</p>
            {/* <a href="/">
                get started
            </a> */}
            {/* <div className="mt-3"> */}
                                    <NavLink to="/services" className="btn-get-started"> 
                                    Get Started cd
                                    </NavLink>
                                {/* </div> */}

            </div>
        </div>  
        </>
    );

}
export default Hero;