import React from "react";
import style from './Firsthighlight.module.css'

function Firsthighlight() {
  return (
    <div className={style.main}>
      <div className={style.mainfirsthighlight}>
        <div>
            <h1>Beautiful Sofa</h1>
            <h2>from $100</h2>
            <h4>Long losting and comfortable to use. this is only for you</h4>

            <button>Shop Now</button>
        </div>
        <div className={style.sofaimg}>
          <img src="/images/onesidesofa.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Firsthighlight;
