import React, { useState } from "react";
import './style.css' 
import lightOn from './light-on.svg';
import lightOff from './light-off.svg';

 

const Light = ({name, state}) => {
    const [lightState, setLightState] = useState({state});

    const handleClick = () =>{
        if (lightState == 'on'){
            setLightState('off');
        }
        else {
            setLightState('on');
        } 
    }
   
    console.log(lightState);

    return (
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={lightState.state == 'on' ? lightOn : lightOff} alt={lightState.state}/>   
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
}

export default Light;