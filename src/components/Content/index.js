import React, { useState } from "react";

import Alert from '../Alert';
import Button from '../Button';

import "./styles.css";
import Slider from "../Slider";

const Content = (props) => {
  const [isShowed, hide] = useState(true);
  const onClickHandle = event => {
    hide(isShowed => !isShowed);
  }

  return (
    <div className = "content">
      <Button type = "button" text = {(isShowed ? 'Скрыть ' : 'Показать ') + 'уведомления'} onClick = {onClickHandle}></Button>
      <div className="alert__block">
          {isShowed ? props.alerts.map((element, index) => {
              return <Alert key = {index + element.text} color = {element.color} text = {element.text}></Alert>;
          }) : ''}
      </div>
      <Slider picturesArr={props.sliderPictures}></Slider>
    </div>
  );
};

export default Content;