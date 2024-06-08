import React from "react";
import Cart from "./Cart";
const Bd = (props) => {
  return (
    <>
      {props.showCart && (
        <>
          <section onClick={props.hideCartHandler} className="backdrop" />
          <Cart hideCartHandler={props.hideCartHandler} />
        
        </>
      )}
    </>
  );
};

export default Bd;
