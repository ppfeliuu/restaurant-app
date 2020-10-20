import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Text, H1, H3, Button } from "native-base";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import OrdersContext from "../context/orders/ordersContext";

const ProgressOrder = () => {
  const { idOrder } = useContext(OrdersContext);
  return <Text>{idOrder}</Text>;
};

export default ProgressOrder;
