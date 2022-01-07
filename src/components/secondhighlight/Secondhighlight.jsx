import React from "react";
import style from './Secondhighlight.module.css'

function Secondhighlight() {
  return (
    <div className={style.main}>
      <div className={style.mainfirsthighlight}>
        <div className={style.discount}>
          <div>
            <h1>DISCOUNTS</h1>
          </div>
          <div>
            <h2>Up To</h2>
          </div>
          <div>
            <h1>50%</h1>
          </div>
          <div>
            <h4>This Season</h4>
          </div>
        </div>
        <div className={style.sofaimg}>
          <img src="/images/onesofa.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Secondhighlight;
