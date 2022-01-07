import React from "react";
import Productbar from "./Productbar";
import style from "./Ourproducts.module.css";
import Productcard from "./Productcard";

function Ourproducts() {
  return (
    <div className={style.main}>
      <Productbar />
      <div className={style.mainproducts}>
        <Productcard
          image={"/images/flowervase.jpeg"}
          text1={"Flower Vase"}
          text2={"100"}
        />
        <Productcard
          image={"/images/smallchair1.jpeg"}
          text1={"Small Chair"}
          text2={"100"}
        />
        <Productcard
          image={"/images/wonderfulsofa.jpeg"}
          text1={"Wonderful Sofa"}
          text2={"100"}
        />
        <Productcard
          image={"/images/nicepot.jpeg"}
          text1={"Nice Pot"}
          text2={"100"}
        />
        <Productcard
          image={"/images/amazingchair.jpg"}
          text1={"Amazing Chair"}
          text2={"100"}
        />
        <Productcard
          image={"/images/lighting1.jpeg"}
          text1={"Lighting"}
          text2={"100"}
        />
        <Productcard
          image={"/images/pillow.jpeg"}
          text1={"Pillow"}
          text2={"100"}
        />
        <Productcard
          image={"/images/bookshelf.jpeg"}
          text1={"Book Shelf"}
          text2={"100"}
        />
      </div>
      <div className={style.loadmore}>
        <button>Load More</button>
      </div>
    </div>
  );
}

export default Ourproducts;
