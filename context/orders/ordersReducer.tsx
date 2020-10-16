import { SELECT_PRODUCT } from "../../types";

export default (state: any, action: any) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        dish: action.payload,
      };
    default:
      return state;
  }
};
