import React from 'react'
import Categories from './categories/Categories'
import Featured from './featured/Featured'
import Firsthighlight from './firsthighlight/Firsthighlight'
import Latestnews from './latestnews/Latestnews'
import style from './Mainpage.module.css'
import Ourproducts from './ourproducts/Ourproducts'
import Secondhighlight from './secondhighlight/Secondhighlight'

function Mainpage() {
    return (
        <div>
            <div className={style.welcomeheading}>
                <h1>Welcome to our store</h1>
                <hr className={style.hrstyle}/>
            </div>
            <Categories/>
            <div className={style.welcomeheading}>
                <h1>Featured Product</h1>
                <hr className={style.hrstyle}/>
            </div>
            <Featured/>
            <Firsthighlight/>
            <div className={style.welcomeheading}>
                <h1>Our Product</h1>
                <hr className={style.hrstyle}/>
            </div>
            <Ourproducts/>
            <Secondhighlight/>
            <div className={style.welcomeheading}>
                <h1>Latest News</h1>
                <hr className={style.hrstyle}/>
            </div>
            <Latestnews/>
        </div>
    )
}

export default Mainpage
