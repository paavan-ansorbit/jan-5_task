import React from "react";
import style from './Featured.module.css'

function Feacard(props) {
    const {image,text1,text2} = props;
  return (
    <div className={style.container}>
      <div >
        <img src={image} alt="Avatar" className={style.image} />
      </div>
      
      <div className={style.cardbottom}>
        <div>
          <p>{text1}</p>
          <p>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(text2)}</p>
        </div>
        <div className={style.icondek}>
          <p><i class="fas fa-shopping-cart fa-2x"></i></p>
          <p><i class="far fa-heart fa-2x"></i></p>
        
        </div>
      </div>
    </div>
  );
}

export default Feacard;
