import React from "react"; 

export default function Player(props){
    return(
        <div  className="player">
            <h2>{props.name}</h2>
            
            <p>
                {props.desc}
            </p>
        </div>
    );
}