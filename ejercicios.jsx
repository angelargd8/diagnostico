import { StyleSheet, Text, View, Dimensions, ImageBackground, Image,Animated, Easing,Button ,TouchableOpacity } from 'react-native';
import React, {useEffect, useRef,useState } from 'react';
import LottieView from 'lottie-react-native';
import Layout from './layeout';

//imagenes
import questionMark from './assets/static/QuestionMark.png';
import coinImage from './assets/static/moneda.png';
import scoreBoxImage from './assets/static/pantalla_puntos/cuadroPunteo.png';


const diccionario = {
    "a + b x c =": ["(a + b) x c", "a + b + c", "a x b + c", "a + b x c"], 
    "a x b – c = ": ["a x b – c", "a x (b – c)", "a x b + c", "a + b - c"]
  };

//lo que pensaba era que para comprobar que la respuesta fuera correcta, entonces que busque si el valor es el mismo que la respuesta ingresada
const diccionarioCorrectas= {
    "a + b x c =": "a + b x c",
    "a x b – c = ": "a x b – c"
}
const primeraLlave = Object.keys(diccionario)[0];

const buttons = [diccionario['a + b x c ='][0], diccionario['a + b x c ='][1], diccionario['a + b x c ='][2], diccionario['a + b x c ='][3]];

function Ejercicios(){
    const [showAnimation, setShowAnimation] = useState(false);


    return(
        <Layout>
            <View style={styles.contenedorPrincipal}>

                <View style={ screenWidth <= 706 ?  styles.tituloMovil :styles.titulo}>
                    <Text style={{ color: 'white' , fontSize: 40 ,fontWeight: 'bold'}}>
                        ¡Desafíate!
                    </Text>
                </View>
                <View style={ styles.niveles}>
                    <Text style={{ color: 'white' , fontSize: 15 ,}}>
                        Nivel:
                    </Text>
                    {/** Aquí iria la lógica de los niveles, de que obtener el len de cuantas lleva*/}
                    <Text style={{ color: 'white' , fontSize: 15 }}>
                        0/10
                    </Text>
                </View>

                <View style={styles.barra}>{/** Aquí iria la lógica de labarra naranja*/}</View>
                <View style={styles.contenedorPreguntas}>
                    <Text style={styles.textQuestion}>
                        {primeraLlave}
                    </Text>
                    <Image source={questionMark} style={styles.questionMark} resizeMode='contain'/>
                </View>

                

                {/** botones de respuesta*/}
                <View style={styles.contenedorBoton}>
                    {buttons.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => {
                        setShowAnimation(true);
                        setTimeout(() => {
                            setShowAnimation(false);
                        }, 2000);
                        navigation.navigate('Ejercicios');
                        }}
                    >
                        <Text style={styles.text}>{button}</Text>
                    </TouchableOpacity>
                    ))}
                    {showAnimation && (
                    <LottieView source={require('./assets/Animaciones/Estrellitas.json')} autoPlay loop style={{...styles.animar}} />
                    )}
                </View>


                
                <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => {
                        navigation.navigate('Ejercicios');
                        }}
                    >
                        <Text style={styles.textNext}>Siguiente</Text>
                    </TouchableOpacity>
                
                

            </View>
        </Layout>
    );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    contenedorPrincipal: {
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
    barra:{
        backgroundColor: '#FFF',
        width: '80%',
        height : '3%',
        borderRadius:  80,
        top: '-6.5%',
    },
    contenedorPreguntas:{
        backgroundColor: '#FFF',
        width: '40%',
        height : '20%',
        borderRadius:  10,
        top: '-3%',
        position: 'relative',
        flexDirection: 'row',

    },
    contenedorRespuestasMovilNotesteado:{
        position: 'relative',
        backgroundColor: '#FFFFFF',
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
        shadowColor: ' #8D8D8D',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,

    },
    niveles:{
        top: '-7%',
        flexDirection: 'row',
        marginTop: "0",
        shadowColor: '#8D8D8D',
        alignItems: 'left',
        margin: "10",
        backgroundColor: '#391D4B',
        borderRadius:  30,

    },
    titulo:{
        top: '-8%',
        marginTop: "-8%",
        shadowColor: '#8D8D8D',
        backgroundColor: '#391D4B',
        borderRadius:  30,
    },

    tituloMovil:{
        top: '-30%',
        marginTop: "-8%",
        shadowColor: '#8D8D8D',
    },
    animar:{
        width: '100%', 
        height: '100%',
        top: '-10%',
        //left: '-150%',
        zIndex: 3,
        position: 'absolute',
        flexWrap: 'wrap',
        alignItems: 'left',
    },
    contenedorBoton:{
        top: '-1%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        
    },
    buttonNext:{
        top: '3%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: '15%',  
        shadowColor: '#204D8D',
        borderBlockEndColor: '#204D80',
        borderBlockColor: '#204D80',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    textNext: {
        color: '#133362',
        shadowColor: '#8D8D8D',
        fontWeight: 'bold',
        fontSize: 15,
    },
    button: {
        backgroundColor: '#6AB1B5',
        padding: 30,
        borderRadius: 10,
        marginStart: "1%",
        marginTop: "1%",
        shadowColor: '#204D8D',
        borderBlockEndColor: '#204D80',
        borderBlockColor: '#204D80',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        
        

    },
    text: {
        color: '#FFF',
        shadowColor: '#8D8D8D',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textQuestion:{
        color: '#133362',
        shadowColor: '#8D8D8D',
        fontWeight: 'bold',
        fontSize: 50,
        marginTop: 22,
        marginStart: 50,
    },
    questionMark:{

        marginTop: 13,
        marginStart: 40,
    }
    
  });


export default Ejercicios;