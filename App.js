import { StyleSheet, Text, View, Dimensions, ImageBackground  } from 'react-native';
import React from 'react';
import Header  from './header';
import Footer from './footer';
import Instrucciones from './instrucciones';
//imagenes
import backgroundImage1 from './assets/static/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png';
import backgroundImage2 from './assets/static/Fondo_RutaIterg_720x1600px_ExploraxV2-0 - copia.png';


export default function App() {
  const screenWidth = Dimensions.get('window').width;

  return (
    
    <ImageBackground source={screenWidth <= 706 ? backgroundImage1 : backgroundImage2} style={styles.contenedor} resize='cover'>
      <Header style={{ flex: 1 }}/>
      <Instrucciones />
      <Footer style={{ flex: 1 }}/>
    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#391D4B',
    overflow: 'hidden',

  },
});
