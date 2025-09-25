import React from "react";
import './popup.css'

function Popup({ title, status }){
    return (
        <div className={`popup__wrapper ${status ? "open":''}`}>
            <div className="popup__inner">
                <h2 className="popup__title">{title}</h2>
            </div>
        </div>
    )
}

export default Popup;