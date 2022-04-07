import React from 'react'
import './css/button.css'

const Button = ({ children, onClick, selected }) => {
    return (selected) ? (
        <span onClick={onClick} className="day_button">
            {children}
        </span>
    ) : (
        <span onClick={onClick} className="day_button_selected">
            {children}
        </span>
    )
}

export default Button;




