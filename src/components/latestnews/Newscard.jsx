import React from 'react'
import style from "./Latestnews.module.css";


function Newscard(props) {
    const {image}=props;
  return (
      <div className={style.container}>
        <img src={image} alt="Avatar" className={style.image} />
      </div>
  );
}

export default Newscard
