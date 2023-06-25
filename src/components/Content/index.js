import React from "react";

import Alert from '../Alert';

import "./styles.css";

const Content = (props) => {
  return (
    <div className="content">
        {props.contentArr.map((element, index) => {
            return <Alert key={index + element.text} color={element.color} text={element.text}></Alert>;
        })}
    </div>
  );
};

export default Content;