import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
import { FontAwesome } from '@expo/vector-icons';  // Importar el icono deseado
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from './src/componentes/home/SplashScreen'



export default function App() {
    const [splashVisible, setSplashVisible] = useState(true);

    useEffect(() => {
        // Simulación de tiempo de espera (3 segundos)
        setTimeout(() => {
            // Ocultar el splash screen después de 3 segundos
            setSplashVisible(false);
        }, 3000);
    }, []);
//name="spinner"  size={50} color="white" spin

    return (
        <>
            {splashVisible ? (
                // Splash screen con icono de carga giratorio
                <View style={styles.container}>
                    <Image source={require('./assets/cargando.gif')}   />
                </View>
            ) : (
                // Aplicación principal
                
                <GestureHandlerRootView> 
                <NavigationContainer >
                    
                    <Navigation> 
                    
                    </Navigation>
                    
                    
                </NavigationContainer>
                </GestureHandlerRootView>//para no tener inconvenientes con TouchableOpacity
            )}
            <StatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
