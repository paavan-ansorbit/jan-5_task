import React from "react";
import style from "./Latestnews.module.css";
import Newscard from "./Newscard";

function Latestnews() {
  return (
    <div className={style.main}>
      <div className={style.mainnews}>
        <Newscard image={'/images/dish.jpeg'}/>
        <Newscard image={'/images/flowervase.jpeg'}/>
        <Newscard image={'/images/nicepot.jpeg'}/>
      </div>
    </div>
  );
}

export default Latestnews;
