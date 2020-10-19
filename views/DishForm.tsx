import React, { useState, useContext, useEffect } from 'react'
import {
    Container,
    Content,
    Form,
    Icon,
    Input,
    Grid,
    Col,
    Button,    
    Text,
    Footer,
    FooterTab    
  } from "native-base";
  import { Alert, Image } from "react-native";
  import globalStyles from "../styles/global";
  import { useNavigation } from "@react-navigation/native";
  import OrdersContext from "../context/orders/ordersContext";

const DishForm = () => {

    const [cantidad, setCantidad] = useState(1)  
    const [total, setTotal] = useState(0)  
    const { dish, saveOrder } = useContext(OrdersContext)
    const { price } = dish

    //redirect
    const navigation = useNavigation()

    useEffect(() => {
        calcularTotal()
    }, [cantidad])

    const calcularTotal = () => {
        const totalPay = price * cantidad
        setTotal(totalPay)
    }

    const increment = () => {
        const newQ = cantidad + 1;
        setCantidad(newQ)
    }

    const decrement = () => {
        if (cantidad > 1) {
            const newQ = cantidad - 1;
            setCantidad(newQ)
        }        
    }

    const confirmOrder = () => {
        Alert.alert(
            'Do you confirm this order?',
            'Confirmed order',
            [
                {
                    text: 'OK',
                    onPress: () => {
                        const order = {
                            ...dish,
                            cantidad,
                            total
                        }

                        saveOrder(order)

                        navigation.navigate('Resume')

                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Text style={globalStyles.titulo}>Quantity</Text>
                    <Grid>
                        <Col><Button full dark style={{ height: 80, justifyContent: 'center'}} onPress={() => decrement()}><Icon style={{ fontSize: 40 }} name="remove" /></Button></Col>
                        <Col><Input style={{ textAlign: 'center', fontSize: 20}} keyboardType="numeric" value={cantidad.toString()} onChangeText={cantidad => setCantidad(Number(cantidad))} /></Col>
                        <Col><Button full dark style={{ height: 80, justifyContent: 'center'}} onPress={() => increment()}><Icon style={{ fontSize: 40 }} name="add" /></Button></Col>
                    </Grid>
                    <Text style={globalStyles.cantidad}>Total €: {total}</Text>
                </Form>
            </Content>

            <Footer>
                <FooterTab>
                <Button
                    style={globalStyles.boton}    
                    onPress={() => confirmOrder()}                
                >
                    <Text style={globalStyles.botonTexto}>Add to Order</Text>
                </Button>
                </FooterTab>
            </Footer>

        </Container>
    )
}

export default DishForm
