import React, { useContext, useEffect } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Button,
  H1,
  Footer,
  FooterTab,
} from "native-base";

import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import OrdersContext from "../context/orders/ordersContext";
import { Alert } from "react-native";
import firebase from "../firebase";

const ResumeOrder = () => {
  const navigation = useNavigation();

  const {
    order,
    total,
    showResumen,
    deleteProduct,
    orderCompleted,
  } = useContext(OrdersContext);

  useEffect(() => {
    calcTotal();
  }, [order]);

  const calcTotal = () => {
    let newTotal = 0;
    newTotal = order.reduce((n: any, a: any) => n + a.total, 0);
    showResumen(newTotal);
  };

  const gotoProgress = () => {
    Alert.alert("Reviwe order", "Check your order", [
      {
        text: "OK",
        onPress: async () => {
          const orderObj = {
            deliveryTime: 0,
            completed: false,
            total: Number(total),
            order: order,
            createdDate: Date.now(),
          };

          //write firebase
          try {
            const order = await firebase.db.collection("order").add(orderObj);
            // console.log(order);
            orderCompleted(order.id);
            navigation.navigate("Progress");
          } catch (error) {
            console.log(error);
          }
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const confirmDelete = (id: any) => {
    Alert.alert("Delete product", "Delete", [
      {
        text: "OK",
        onPress: () => {
          deleteProduct(id);
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  return (
    <Container style={globalStyles.contenedor}>
      <Content style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>Resumen Order</H1>
        {order.map((p: any, i: number) => {
          const { cantidad, name, image, id, price } = p;
          return (
            <List key={id + i}>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail large square source={{ uri: image }} />
                </Left>

                <Body>
                  <Text>{name}</Text>
                  <Text>Quantity: {cantidad}</Text>
                  <Text>Price €:{price}</Text>

                  <Button
                    onPress={() => confirmDelete(id)}
                    full
                    danger
                    style={{ marginTop: 20 }}
                  >
                    <Text style={[globalStyles.botonTexto, { color: "#FFF" }]}>
                      Delete
                    </Text>
                  </Button>
                </Body>
              </ListItem>
            </List>
          );
        })}

        <Text style={globalStyles.cantidad}>Total to pay: € {total} </Text>
        <Button
          dark
          full
          style={{ marginTop: 30 }}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={[globalStyles.botonTexto, { color: "#FFF" }]}>
            Continue Shopping
          </Text>
        </Button>
      </Content>

      <Footer>
        <FooterTab>
          <Button
            full
            style={[globalStyles.boton]}
            onPress={() => gotoProgress()}
          >
            <Text style={globalStyles.botonTexto}>Order</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default ResumeOrder;
