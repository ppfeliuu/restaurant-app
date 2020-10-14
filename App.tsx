import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import NewOrder from './views/NewOrder';
import Menu from './views/Menu';
import DishForm from './views/DishForm';
import DishDetail from './views/DishDetail';
import ResumeOrder from './views/ResumeOrder';
import ProgressOrder from './views/ProgressOrder';

import FirebaseState from './context/firebase/firebaseState'
import OrdersState from './context/orders/ordersState';

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
      <FirebaseState>
        <OrdersState>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: {
          backgroundColor: '#FFDA00'
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
        }}>
            <Stack.Screen name="NewOrder" component={NewOrder} options={{ title: 'New Order'}} />
            <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu'}} />
            <Stack.Screen name="DishDetail" component={DishDetail} options={{ title: 'Detail'}} />
            <Stack.Screen name="DishForm" component={DishForm} options={{ title: 'Form'}} />
            <Stack.Screen name="Resume" component={ResumeOrder} options={{ title: 'Resume'}} />
            <Stack.Screen name="Progress" component={ProgressOrder} options={{ title: 'Progress Order'}} />
        </Stack.Navigator>
      </NavigationContainer>
      </OrdersState>
      </FirebaseState>
    </>
  );
}

const styles = StyleSheet.create({

});
