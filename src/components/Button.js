import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {
   
   const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });
     
    //the tests are already handling the callback function that 
    //props.onClick is the callback for clickable
    //props.disabled is the callback for disabled
      //empty unless disabled is passed on

   return (
     
     <button className={buttonClass} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
     
     );

}
