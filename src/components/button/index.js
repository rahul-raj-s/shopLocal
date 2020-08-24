import React from "react";
import style from "./button.module.css";

export default function Button({ onClick, ...props }) {
  return (
    <button className={style.primary_btn} onClick={onClick}>
      {props.children}
    </button>
  );
}
