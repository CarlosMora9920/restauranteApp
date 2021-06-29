import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Menu from './views/Menu';

import BtnResumen from './componentes/ui/BtnResumen';

import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';

const Stack = createStackNavigator();

const App = () => {
  return(
    <>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyles: {
                  backgroundColor: '#ff0000'
                },
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerTitleAlign: 'center',
                headerTintColor: '#000'
              }}
            >
              <Stack.Screen
                name="NuevaOrden"
                component={NuevaOrden}
                options={{
                  title: "Nueva Orden"
                }}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                  title: "Este es nuestro menú",
                  headerRight: props => <BotonResumen/>
                }}
              />
              <Stack.Screen
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{
                  title: "Detalle Platillo"
                }}
              />
              <Stack.Screen
                name="FormPlatillo"
                component={FormPlatillo}
                options={{
                  title: "Ordenar Pedido"
                }}
              />
              <Stack.Screen
                name="ResumenPedido"
                component={ResumenPedido}
                options={{
                  title: "Resumen Pedido"
                }}
              />
              <Stack.Screen
                name="ProgPedido"
                component={ProgPedido}
                options={{
                  title: "Progreso de pedido"
                }}
              />
              </Stack.Navigator>  
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </>
  );
};

export default App;

