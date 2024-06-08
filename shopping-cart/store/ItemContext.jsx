import { createContext, useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.totalAmount;
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exitItem = state.items[existItemIndex];
    let updateItems;
    if (exitItem) {
      const updateItem = {
        ...exitItem,
        totalAmount: exitItem.totalAmount + action.item.totalAmount,
      };
      updateItems = [...state.items];
      updateItems[existItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const exitItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exitItem = state.items[exitItemIndex];
    const updatedTotalAmount = state.totalAmount - exitItem.price;
    let updatedItems;
    if(exitItem.totalAmount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id);
    }else{
      const updatedItem = {
        ...exitItem, totalAmount : exitItem.totalAmount - 1
      }
      updatedItems = [...state.items];
      updatedItems[exitItemIndex] = updatedItem;
    }
    return{
      items : updatedItems,
      totalAmount : updatedTotalAmount,
    }
  }
  return initialState;
};

export const ItemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const ItemContextProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };
  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };

  const contextValue = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <ItemContext.Provider value={contextValue}>
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemContextProvider;
