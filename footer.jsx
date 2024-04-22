import { StyleSheet, Text, View, Dimensions, ImageBackground, Image,Animated, Easing  } from 'react-native';
import React, {useRef} from 'react';
//imagenes
import logo from './assets/static/LogoParaFondosOscuros_ExploraxV2-0.png';
import scoreBoxImage from './assets/static/pantalla_puntos/cuadroPunteo.png';

function Footer(){

    return(
        <View style={styles.footer}>
            
            <Image source={scoreBoxImage} style={styles.navegacion3} resizeMode='contain' />
            <View style={screenWidth <= 706 ? styles.fondo1Movil :styles.fondo1}></View>
            <View style={screenWidth <= 706 ? styles.fondo2Movil : styles.fondo2}></View>
            <View style={screenWidth <= 706 ? styles.fondo3Movil : styles.fondo3}></View>
            <View style={styles.navegacion3}></View>
            <View style={styles.navegacion2}></View>
            <View style={styles.navegacion1}></View>
            <Image source={logo} style={styles.logo} resizeMode='contain' />
        </View>
        
    );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '100%',
        zIndex: -1,
    },
    logo: {
        height: '10%',
        width: '160%',
        position: 'absolute',
        top: '89%',
        left: '-30%',
        zIndex: 3,
    },
    fondo1: {
        backgroundColor: '#8D3D91',
        borderRadius:  '50%',
        height: '300%',
        width: '200%',
        position: 'absolute',
        top: '70%',
        left: '-50%',
        zIndex: 1,
    },
    fondo2: {
        backgroundColor: '#773380',
        borderRadius:  '50%',
        height: '300%',
        width: '200%',
        position: 'absolute',
        top: '78%',
        left: '-50%',
        zIndex: 1,
    },
    fondo3: {
        backgroundColor: '#672B6E',
        borderRadius:  '50%',
        height: '300%',
        width: '200%',
        position: 'absolute',
        top: '82%',
        left: '-50%',
        zIndex: 1,
    },
    fondo1Movil: {
        backgroundColor: '#8D3D91',
        borderRadius:  '50%',
        height: '100%',
        width: '200%',
        position: 'absolute',
        top: '70%',
        left: '-50%',
        zIndex: 1,
    },
    fondo2Movil: {
        backgroundColor: '#773380',
        borderRadius:  '50%',
        height: '100%',
        width: '200%',
        position: 'absolute',
        top: '78%',
        left: '-50%',
        zIndex: 1,
    },
    fondo3Movil: {
        backgroundColor: '#672B6E',
        borderRadius:  '50%',
        height: '100%',
        width: '200%',
        position: 'absolute',
        top: '82%',
        left: '-50%',
        zIndex: 1,
    },
    navegacion3: {
        backgroundColor: '#0084C4',
        borderRadius:  '50%',
        height: '150%',
        width: '200%',
        position: 'absolute',
        top: '86%',
        left: '-50%',
        zIndex: 2,
    },

    navegacion2: {
        backgroundColor: '#38A8CD',
        borderRadius:  '80%',
        height: '150%',
        width: '200%',
        position: 'absolute',
        top: '87.5%',
        left: '-50%',
        zIndex: 2,
    },

    navegacion1: {
        backgroundColor: '#084872',
        borderRadius:  '80%',
        height: '150%',
        width: '200%',
        position: 'absolute',
        top: '88%',
        left: '-50%',
        zIndex: 2,
    },
    
  });


export default Footer;