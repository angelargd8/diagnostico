import { StyleSheet, Text, View, Dimensions, ImageBackground, Image,Animated, Easing  } from 'react-native';
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
//imagenes
import planetImage from './assets/static/PlanetaA.png';
import coinImage from './assets/static/moneda.png';
import scoreBoxImage from './assets/static/pantalla_puntos/cuadroPunteo.png';

function Instrucciones(){

    return(
        <View style={styles.contenedorInstrucciones}>
            <View style={styles.contenedor}>
            </View>
            <View style={styles.animar}>
            <LottieView source={require('./assets/Animaciones/D con fuego.json')} autoPlay loop style={styles.animar} />
            </View>
            
            <View style={styles.instrucciones}>
            </View>
            <View style={styles.titulo}>
            </View>
            <View style={styles.descripcion}>
            </View>
            <View style={styles.planeta}>
            </View>
            


        </View>
    );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    contenedorInstrucciones: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        height: '100%',
        width: '100%',
        
    },
    animar:{
        top: 0,
        left: 20,
        alignItems: 'center',
        zIndex: 6,
    },
    contenedor:{
        position: 'relative',
        backgroundColor: '#204D8D',
        borderRadius: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: '-8%',
        left: '0%',
        right: '20%',
        zIndex: 3,
        height: '50%',
        width: '40%',
        shadowColor: '#123051',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },
    instrucciones:{
        alignItems: 'center',
    },
    titulo:{
        alignItems: 'center',
    },
    descripcion:{
        alignItems: 'center',
    },
    planeta:{
        alignItems: 'center',
    },
    
  });


export default Instrucciones;