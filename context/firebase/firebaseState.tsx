import React, { useEffect, useReducer } from 'react'
import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import firebase from '../../firebase'
import { GET_PRODUCTS_OK } from '../../types'
import _ from 'lodash'

const FirebaseState = (props: { children: React.ReactNode }) => {

    // console.log(firebase);

    //initial state
    const initialState = {
        menu: []
    }

    // use reducer
    const [state, dispatch] = useReducer(FirebaseReducer, initialState)

    //Functions
    const getProducts = () => {
        

        firebase.db.collection('products').where('existencia', '==', true).onSnapshot(handleSanpshot);

        function handleSanpshot(snapshot: any) {
            let dishes = snapshot.docs.map((doc: any) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            dishes = _.sortBy(dishes, 'category')

            dispatch({
                type: GET_PRODUCTS_OK,
                payload: dishes        
            })
        }
    }


    return (
        <FirebaseContext.Provider value={{
            menu: state.menu,
            firebase,
            getProducts
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState
