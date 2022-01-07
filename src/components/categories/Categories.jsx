import React from "react";
import style from "./categories.module.css";
import Catcard from "./Catcard";

function Categories() {
  return (
    <div className={style.main}>
      <div className={style.maincategories}>
        <Catcard image={'/images/chair2.jpeg'} text={'confortable sofa'}/>
        <Catcard image={'/images/chair3.jpeg'} text={'confortable chair'}/>
        <Catcard image={'/images/lighting.jpeg'} text={'amazing lighting'}/>
        <Catcard image={'/images/pillow1.jpeg'} text={'Other house stuff'}/>
        
      </div>
    </div>
  );
}

export default Categories;
