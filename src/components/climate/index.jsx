import React, { useState } from "react";
import './style.css';
import tempImg from './temp.svg';

const Climate = ({ temperature, humidity }) => {

    const [temperatureState, setTemperatureState] = useState(temperature);

    const plusDegree = () => {
        setTemperatureState(temperatureState + 1)
    }

    const minusDegree = () => {
        setTemperatureState(temperatureState - 1)
    }

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={tempImg} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperatureState}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={plusDegree}>+</button>
                <button className="button" onClick={minusDegree}>-</button>
            </div>
        </div>
    )
}

export default Climate;