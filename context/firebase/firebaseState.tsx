import React, { useReducer } from 'react'
import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'

import firebase from '../../firebase'

const FirebaseState = (props: { children: React.ReactNode }) => {

    console.log(firebase);

    //initial state
    const initialState = {
        menu: []
    }

    // use reducer
    const [state, dispatch] = useReducer(FirebaseReducer, initialState)

    return (
        <FirebaseContext.Provider value={{
            menu: state.menu,
            firebase
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState