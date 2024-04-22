import { StyleSheet, Text, View, Dimensions, ImageBackground  } from 'react-native';
import React from 'react';
import Instrucciones from './instrucciones';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ejercicios from './ejercicios';

const Stack = createNativeStackNavigator();

export default function App() {

  const screenWidth = Dimensions.get('window').width;

  return (
    <NavigationContainer style={styles.navegacion}>
      
        
        <Stack.Navigator screenOptions={
          { 
            ...styles.navegacion,
            headerShown: false , 
            cardStyle: { backgroundColor: 'transparent' } , 
            transparentCard: true,
            cardOverlayEnabled: true
          }}>
          <Stack.Screen name="Instrucciones" component={Instrucciones} options={{ cardStyle: { backgroundColor: 'transparent' } }}/>
          <Stack.Screen name="Ejercicios" component={Ejercicios} options={{ cardStyle: { backgroundColor: 'transparent' } }}/>
        </Stack.Navigator>
        
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  navegacion: {
    flex: 1,
    top:0, 
    left:0,
    position: 'absolute',
    backgroundColor: '#204d8d11',
    zIndex:-1,
  },
});
