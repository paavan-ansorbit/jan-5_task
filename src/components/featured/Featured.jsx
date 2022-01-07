import React from 'react'
import Feacard from './Feacard'
import style from './Featured.module.css'

function Featured() {
    return (
        <div className={style.main}>
        <div className={style.mainfeatured}>
          <Feacard image={'/images/dish.jpeg'} text1={'Unique Collection'} text2={'100'}/>
          <Feacard image={'/images/candlestand.jpeg'} text1={'Candle Stand'} text2={'100'}/>
          <Feacard image={'/images/smallchair.jpeg'} text1={'Small Chair'} text2={'100'}/>
          <Feacard image={'/images/wonderwatch.jpeg'} text1={'Wonder Watch'} text2={'100'}/>
          
        </div>
      </div>
    )
}

export default Featured
