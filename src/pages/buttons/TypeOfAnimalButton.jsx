import React from 'react';
import './TypeOfAnimalButton.css';

const TypeButton = (props) => {
    var classname = "button";
    if (props.checked) {
        classname = "button_checked"
    }
    return (
        <button className={classname} onClick={props.click}>
            <img src={props.image} alt="icon" />
            <p>{props.text}</p>
        </button>
    );
}

export default TypeButton;