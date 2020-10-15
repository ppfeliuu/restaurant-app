import { GET_PRODUCTS_OK } from "../../types"

export default (state: any, action: any) => {
    switch (action.type) {
        case GET_PRODUCTS_OK: 
        return {
            ...state,
            menu: action.payload
        }
            
        default:
            return state
    }
}