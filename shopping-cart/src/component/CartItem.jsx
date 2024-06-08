import React, { createContext, useContext } from 'react'
import { ItemContext } from '../../store/ItemContext'


const CartItem = ({fruit}) => {
  const {addItem,removeItem} = useContext(ItemContext);
  const addAmountHandler = () =>{
    addItem  ({...fruit,totalAmount :1})
  }

  const removeAmountHandler = () =>{
    removeItem(fruit.id);
  }
  return (
    <div className='card cart-box'>
        <h4 className='card-title'>{fruit.name}</h4>
        {/* <p className='card-description'>{fruit.description}</p> */}
        <p className='card-price'>${fruit.price}</p>
        <button className='cart-minus' onClick={removeAmountHandler}>-</button> 
        <span>{fruit.totalAmount}</span>
        <button className='cart-plus' onClick={addAmountHandler}>+</button>
    </div>
  )
}

export default CartItem