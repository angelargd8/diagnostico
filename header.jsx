import { StyleSheet, Text, View, Dimensions, ImageBackground, Image,Animated, Easing  } from 'react-native';
import React, {useEffect, useRef} from 'react';
//imagenes
import planetImage from './assets/static/PlanetaA.png';
import coinImage from './assets/static/moneda.png';
import scoreBoxImage from './assets/static/pantalla_puntos/cuadroPunteo.png';

function Header(){
    //aquí iria la lógica de lo del conteo moneditas
    const contador = 0

    //rotar imagen
    const spinValue = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.loop(
                Animated.timing(
                    spinValue,
                    {
                        toValue: 1,
                        duration: 30000,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }
                )
            ).start();
        }, []);

      const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      });

    //fin de la animacion
    
    return(
        <View style={styles.header}>
            {/** me hubiera gustado agregar en vez de la imagen el .json porque no siempre se queda girando el planeta */}
            <Animated.Image style={{...styles.planet, transform: [{rotate: spin}]}} source={planetImage}  resizeMode='contain' />
            <View style={styles.punteo}>
                <Image source={coinImage} style={screenWidth <= 706 ? styles.monedaMovil:styles.moneda} resizeMode='contain'/>
                <Image source={scoreBoxImage } style={ screenWidth <= 706 ? styles.cuadroPunteo1 :styles.cuadroPunteo} />
                <Text style={screenWidth <= 706 ? styles.textMovil :styles.text}>
                000{contador}
                </Text>
            </View>
        </View>
    );
}


//obtener el ancho y largo de la pantalla

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

//---estilos---
const styles = StyleSheet.create({
    header: {
        minHeight: screenHeight * 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: screenWidth * 0.05,
        marginRight: screenWidth * 0.05,
    },
    text:{
        color: 'white' ,
        fontSize: 20 , 
        fontWeight: 'bold',
        position: 'absolute',
        marginRight: screenWidth * 0.01,
        marginLeft: screenWidth * 0.05,
        zIndex: 2,
    },
    textMovil:{
        color: 'white' ,
        fontSize: 30 , 
        fontWeight: 'bold',
        position: 'absolute',
        marginRight: screenWidth * 0.01,
        marginLeft: screenWidth * 0.14,
        zIndex: 2,
    },
    planet: {
        height: screenHeight * 0.13,
    },
    punteo: {
        top: 1,
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center'
    },
    moneda: {
        height: screenHeight * 0.07,
        width: screenWidth * 0.03,
        marginRight: screenWidth * 0.03,
        minHeight: 45, 
        minWidth: 45, 
        zIndex: 1,
        top: 0,
        position: 'absolute',
    },
    monedaMovil: {
        height: screenHeight * 0.07,
        width: screenWidth * 0.03,
        marginRight: screenWidth * 0.03,
        minHeight: 50, 
        minWidth: 50, 
        zIndex: 1,
        top: 0,
        position: 'absolute',
    },
    cuadroPunteo: {
        height: screenHeight * 0.06,
        width: screenWidth * 0.12,
        borderRadius: 80,
        marginRight: screenWidth * 0.04,
        zIndex: 0,
        position: 'relative',
    },
    cuadroPunteo1: {
        height: screenHeight * 0.07,
        width: screenWidth * 0.35,
        borderRadius: 80,
        marginRight: screenWidth * 0.03,
        zIndex: 0,
        position: 'relative',
    },
  });


export default Header;