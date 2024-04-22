import { StyleSheet, Text, View, Dimensions, ImageBackground, Image,Animated, Easing,Button ,TouchableOpacity } from 'react-native';
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from './layeout';

function Instrucciones(){
    const navigation = useNavigation();
    return(
        <Layout>
            <View style={styles.contenedorInstrucciones}>

                <View style={screenWidth <= 706 ?  styles.animarMovil :styles.animar}>
                <LottieView source={require('./assets/Animaciones/D con fuego.json')} autoPlay loop style={styles.animar} />
                </View>
                
                <View style={ screenWidth <= 706 ? styles.contenedorMovil :styles.contenedor}>
                    <View style={styles.instrucciones}>
                        <View style={styles.titulo}>
                            <Text style={{ color: 'white' , fontSize: 40 ,fontWeight: 'bold'}}>
                                ¡Desafíate!
                            </Text>
                        </View>
                        <View style={screenWidth <= 706 ?  styles.descripcionMovil: styles.descripcion}>
                            <Text style={{ color: 'white' ,fontSize: 15 }}>
                                        Supera estos desafíos
                                        y empieza a completar
                                        la misión de:
                            </Text>
                        </View >
                        <View style={styles.planeta}>
                            <Text style={{ color: 'white' , fontSize: 15 , fontWeight: 'bold' }} >
                            Jerarquía de operaciones
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        
                        navigation.navigate('Ejercicios');
                        }}
                    >
                        <Text style={styles.text}>¡ACEPTO EL RETO!</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </Layout>
    );
}

//obtener el ancho y largo de la pantalla

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

//---estilos---
const styles = StyleSheet.create({
    contenedorInstrucciones: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent' 
        
    },
    animar:{
        position: 'relative',
        top: '-25%',
        left: "-15%",
        zIndex: 6,
        width: '30%',
        height: '30%',
    },
    animarMovil:{
        position: 'relative',
        top: '13%',
        left: "-20%",
        zIndex: 6,
        width: '80%',
        height: '80%',
    },
    contenedor:{
        position: 'relative',
        backgroundColor: '#204D8D',
        borderRadius: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: '-20%',
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
    contenedorMovil:{
        position: 'relative',
        backgroundColor: '#204D8D',
        borderRadius: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: '-47%',
        left: '0%',
        right: '20%',
        zIndex: 3,
        height: '40%',
        width: '65%',
        shadowColor: '#123051',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },
    descripcionMovil:{
        marginTop: "5%",
        marginStart: "5%",
        marginEnd: "2%",
    },
    instrucciones:{
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    titulo:{
        marginTop: "-8%",
        shadowColor: '#8D8D8D',
    },
    descripcion:{
        
        marginTop: "5%",
    },
    planeta:{
        
        marginTop: "5%",
    },
    button: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginTop: "10%",
        shadowColor: '#204D8D',
        borderBlockEndColor: '#204D80',
        borderBlockColor: '#204D80',

    },
    text: {
        color: '#133362',
        shadowColor: '#8D8D8D',
        fontWeight: 'bold',
    },
    
  });


export default Instrucciones;