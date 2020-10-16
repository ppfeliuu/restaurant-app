import React, { useContext } from "react";
import OrdersContext from "../context/orders/ordersContext";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  H1,
  Card,
  CardItem,
} from "native-base";
import { Image } from "react-native";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const DishDetail = () => {
  const { dish } = useContext(OrdersContext);

  const { name, image, description, price } = dish;

  const navigation = useNavigation();

  return (
    <Container style={globalStyles.contenedor}>
      <Content style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>{name}</H1>
        <Card>
          <CardItem>
            <Body>
              <Image style={globalStyles.imagen} source={{ uri: image }} />
              <Text style={{ marginTop: 20 }}>{description}</Text>
              <Text style={globalStyles.cantidad}>Price €: {price}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            style={globalStyles.boton}
            onPress={() => navigation.navigate("DishForm")}
          >
            <Text style={globalStyles.botonTexto}>Order Dish</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default DishDetail;
