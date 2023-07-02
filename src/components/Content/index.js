import React, { useState } from "react";

import Alert from '../Alert';
import Button from '../Button';

import "./styles.css";

const Content = (props) => {
  const [isShowed, hide] = useState(true);
  const onClickHandle = event => {
    hide(isShowed => !isShowed);
  }

  return (
    <div className = "content">
      <Button type = "button" text = {(isShowed ? 'Скрыть ' : 'Показать ') + 'уведомления'} onClick = {onClickHandle}></Button>
        {isShowed ? props.contentArr.map((element, index) => {
            return <Alert key = {index + element.text} color = {element.color} text = {element.text}></Alert>;
        }) : ''}
    </div>
  );
};

export default Content;