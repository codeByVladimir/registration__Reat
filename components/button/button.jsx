import React from "react";
import './button.css';

function Button({title}){
    return (
        <button className="hero__button">{title}</button>
    )
}
export default Button;