import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Bd from '../component/Bd'
const Imp = () => {
    const [showCart,setShowCart] = useState(false);
    const showCartHandler = () =>{
        setShowCart(true)
    }
    const hideCartHandler = () =>{
        setShowCart(false)
    }
  return (
    <>
        <Header showCartHandler={showCartHandler} />
        <Body/> 
        <Bd showCart={showCart} hideCartHandler={hideCartHandler}/>
    </>
  )
}

export default Imp