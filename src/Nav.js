 import React from "react";
import { Link } from "react-router-dom";

 export default function(){
        return(
        <div className="Nav">
            <Link to="/main">   
                <h3>Main</h3> 
            </Link>
            <Link to="/about">   
                <h3>About</h3> 
            </Link>
            
        </div>
        )



 }