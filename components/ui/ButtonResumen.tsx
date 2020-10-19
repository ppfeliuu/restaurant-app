import React, { useContext } from 'react'
import { Button, Text } from 'native-base'
import globalStyles from '../../styles/global'
import { useNavigation } from '@react-navigation/native'
import OrdersContext from "../../context/orders/ordersContext";

const ButtonResumen = () => {

    const navigation = useNavigation()

    const { order } = useContext(OrdersContext)

    if(order.length === 0) return null
    
    return (
        <Button style={globalStyles.boton} onPress={() => navigation.navigate('Resume')}>
            <Text style={globalStyles.botonTexto}>
                Go Order
            </Text>
        </Button>
    )
}

export default ButtonResumen
