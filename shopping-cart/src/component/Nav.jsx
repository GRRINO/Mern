import { useContext } from "react";
import { ItemContext } from "../../store/ItemContext";

const Nav = (props) => {
  const {items} = useContext(ItemContext);
  const totalCart = items.reduce((currentVal,item)=>{
    return currentVal+item.totalAmount
  },0);

  return (
    <div className="nav-main">
      <h2 className="nav-title">Shoppy</h2>
      <button onClick={props.showCartHandler} className="nav-btn">
        Cart <span>{totalCart}</span>
      </button>
    </div>
  );
};

export default Nav;
