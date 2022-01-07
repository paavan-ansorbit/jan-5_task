import React from 'react'
import style from './Ourproducts.module.css'

function Productbar() {
    return (
        <div className={style.productbar}>
            <div className={style.productbarlist}>
                <div className={style.pitem}>All product</div>
                <div className={style.pitem}>Chair</div>
                <div className={style.pitem}>Table</div>
                <div className={style.pitem}>Bed</div>
                <div className={style.pitem}>Pots</div>
            </div>
            <div>
                <button>Filter</button>
            </div>
        </div>
    )
}

export default Productbar
