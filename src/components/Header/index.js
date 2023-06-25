import React from "react";

import "./styles.css";

const Header = (props) => {
  return (
    <div className="header">
        <img src={props.src} className="header__logo" alt="logo"></img>
        <div className="header__title">
            <p>{props.title}</p>
        </div>
    </div>
  );
};

export default Header;