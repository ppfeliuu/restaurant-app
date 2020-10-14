import React, { useReducer } from 'react'

import OrdersReducer from './ordersReducer'
import OrdersContext from './ordersContext'

import firebase from '../../firebase'

const OrdersState = (props: { children: React.ReactNode }) => {

    //initial state
    const initialState = {
        order: []
    }

    // use reducer
    const [state, dispatch] = useReducer(OrdersReducer, initialState)

    return (
        <OrdersContext.Provider value={{
            order: state.order,            
        }}>
            {props.children}
        </OrdersContext.Provider>
    )
}

export default OrdersState
