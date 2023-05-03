import React from 'react';
import { Link } from 'react-router-dom';
import './BreedOfAnimalButton.css';

const BreedButton = (props) => {
    var classname = "button";
    if (props.checked) {
        classname = "button_checked"
    }
    var path = "/choice/" + props.id;
    return (
        <Link to={path}>
            <button className={classname} onClick={props.click}>
                <img src={props.image} alt="icon" />
                <p>{props.text}</p>
            </button>
        </Link>
    );
}

export default BreedButton;