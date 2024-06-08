import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ItemContext } from "../../store/ItemContext";

const Cart = (props) => {
  const { items, totalAmount } = useContext(ItemContext);
  return (
    <section className="cart">
      <h2>Your Cart Items are here</h2>
      <section className="overflow-ctr">
      {items.length < 1 ? (
        <h3 className="noItem">no items</h3>
      ) : (
        <>
          {items.map((fruit) => (
            <CartItem key={fruit.id} fruit={fruit} />
          ))}
        </>
      )}
      </section>

      <hr />
      <div className="total">
        <h3>Total Price</h3>
        <p>{totalAmount}</p>
      </div>
      <div className="btns">
        <button onClick={props.hideCartHandler} className="close-btn">
          Close
        </button>
        {items.length < 1 ? (
        <></>
      ) : (
        <>
          <button className="order-btn">Order</button>
        </>
      )}
        
      </div>
    </section>
  );
};

export default Cart;
