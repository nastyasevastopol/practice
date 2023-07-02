import React from "react";

import "./styles.css";

const Button = (props) => {
    switch (props.type) {
        case 'button': 
            return (
                <div className = "button__block">
                    <button className = "button button_primary" type = "button" onClick = {props.onClick}>{props.text || ''}</button>
                    {/* проверить при отсутствии обработчика */}
                </div>
            );
        case 'link':
            return (
                <div className = "button">
                   <button className = "button button_white" type = "submit" onClick = {props.onClick}>{props.text || ''}</button>
                </div>
            );
        case 'submit':
            return (
                <div className = "button">
                    <a className = "button button_white" href = {props.href} onClick = {props.onClick}>{props.text || ''}</a>
                </div>
            );
        default: 
        return (
            <div className = "button"></div>
        );
    }
};

export default Button;