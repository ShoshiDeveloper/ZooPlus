import React from "react";
import './Advantage.css'

const Advantage = (props) => {
    return (
        <div className="advantage">
            <div className="Heading">
                <img src={props.logo} alt="" />
                <p>{props.heading}</p>
            </div>
            <p>{props.subtitle}</p>
        </div>
    );
}

export default Advantage;