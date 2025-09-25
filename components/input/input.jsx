import React from "react";
import './input.css'
function Input({ placeholder, onBlur, name, type, onChange, errorStatus }){
    return (
        <div className="input-wrapper">
            <input name={name} onBlur={onBlur} onChange={onChange} type={type} className="input" placeholder={placeholder} required/>
            {errorStatus && <p className="error">Поле обязательно к заполнению!</p>}    
        </div>
    )
}
export default Input