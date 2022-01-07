import React from "react";
import style from "./categories.module.css";

function Catcard(props) {
    const {image,text}=props;
  return (
      <div className={style.container}>
        <img src={image} alt="Avatar" className={style.image} />
        <div className={style.overlay}>
          <div className={style.text}>{text}</div>
        </div>
      </div>
  );
}

export default Catcard;
