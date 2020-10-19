import React, { useReducer } from "react";

import OrdersReducer from "./ordersReducer";
import OrdersContext from "./ordersContext";

import firebase from "../../firebase";
import { SELECT_PRODUCT, ORDER_DISH_OK, SHOW_RESUMEN, DELETE_PRODUCT } from "../../types";

const OrdersState = (props: { children: React.ReactNode }) => {
  //initial state
  const initialState = {
    order: [],
    dish: null,
    total: 0
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

  //confirm dish
  const saveOrder = (order:any) => {
      dispatch({
        type: ORDER_DISH_OK,
        payload: order
      })
  }

  const showResumen = (total: any) => {
    dispatch({
      type: SHOW_RESUMEN,
      payload: total
    })
  }

  const deleteProduct = (id:any) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    })
  }

  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
        dish: state.dish,
        total: state.total,
        selectDish,
        saveOrder,
        showResumen,
        deleteProduct
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
