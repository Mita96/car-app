import React from "react";
import style from "./Find.module.css";
function Card({image, make}) {
  return <div className={style.card}>
    <img src={image} alt="" />
    <p>{make}</p>
  </div>;
}

export default Card;
