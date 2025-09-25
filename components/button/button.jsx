import React from "react";
import './button.css';

function Button({title, onClick}){
    return (
        <button type="submit" onClick={onClick} className="hero__button">{title}</button>
    )
}
export default Button;