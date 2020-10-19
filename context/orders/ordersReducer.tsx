import { SELECT_PRODUCT, ORDER_DISH_OK, SHOW_RESUMEN, DELETE_PRODUCT } from "../../types";

export default (state: any, action: any) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        dish: action.payload,
      }
    case ORDER_DISH_OK: 
      return {
        ...state,
        order: [...state.order, action.payload]
      }
    case SHOW_RESUMEN:
      return {
        ...state,
        total: action.payload
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        order: state.order.filter(a => a.id !== action.payload)
      }
    default:
      return state;
  }
};
