import React from "react";
import { View,StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";
import SplashScreen from "./SplashScreen";

const Menu=()=>{
    return (
        <View style={styles.container}>
            
            <ProfileCard/>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo el espacio disponible
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        backgroundColor: '#0d1117', //color de fondo para mejor visibilidad
    },
});

export default Menu