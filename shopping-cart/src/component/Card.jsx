import React, { useContext, useReducer } from 'react'
import { ItemContext } from '../../store/ItemContext';

const firstReducer = (state,action)=>{
  switch(action.type){
    case "plus" :
      return {...state, count : state.count + 1};
      case "minus" :
      return {...state, count : state.count - 1};
  }
 
}

const Card = ({fruit}) => {
  const {id,name,description,price} = fruit;
  const[state,dispatch] = useReducer(firstReducer,{key:"",count:0})
  const {addItem} = useContext(ItemContext);
  const tm = state.count;
  const addToCartHandler =()=>{
    if(state.count < 1 || state.count > 5){
      alert("Please enter a valid amount !!!")
      return;
    }
    addItem({
      id,
      name,
      description,
      price,
      totalAmount : state.count
    })
    
  }
  
  return (
    <div className='card'>
        <h4 className='card-title'>{fruit.name}</h4>
        <p className='card-description'>{fruit.description}</p>
        <p className='card-price'>${fruit.price}</p>
        <div className='btn'>
        <button onClick={addToCartHandler} className='card-btn'>+ Add</button>
            <div >
                <button   onClick={() => dispatch({type : "minus"})} className='minus-btn'>-</button>
                <span >{state.count}</span>
                <button onClick={() => dispatch({type : "plus"})} className='minus-btn'>+</button>
            </div>
        </div>
    </div>
  )
}


export default Card