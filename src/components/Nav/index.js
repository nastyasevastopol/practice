import React from "react";

import "./styles.css";

const Nav = (props) => {
  return (
    <div className="nav">
        {props.navArr.map((element, index) => {
            return <a className="nav__element" key={index} href={element.link}>{element.title}</a>;
        })}
    </div>
  );
};

export default Nav;