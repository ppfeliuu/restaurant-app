import React, { useReducer } from "react";

import OrdersReducer from "./ordersReducer";
import OrdersContext from "./ordersContext";

import firebase from "../../firebase";
import { SELECT_PRODUCT } from "../../types";

const OrdersState = (props: { children: React.ReactNode }) => {
  //initial state
  const initialState = {
    order: [],
    dish: null,
  };

  // use reducer
  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  //Select product
  const selectDish = (dish: any) => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: dish,
    });
  };

  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
        dish: state.dish,
        selectDish,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
