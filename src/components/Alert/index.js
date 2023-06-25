import React from "react";

import "./styles.css";

const Alert = (props) => {
  return (
    <div className={'alert alert_'+props.color}>
        {/* <div className="alert__inner"> */}
            {/* <p className={'alert__text alert__text_'+props.text}> */}
                {props.text}
                {/* </p> */}
        {/* </div> */}
    </div>
  );
};

export default Alert;