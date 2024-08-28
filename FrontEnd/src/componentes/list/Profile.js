import React from "react";
import {View, StyleSheet, Image, Text, Linking, TouchableWithoutFeedback, Button} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const instagram = <Icon name={'instagram'} size={30} color={'#496a85'}/>
const portafolio_url = <Icon name={'globe'} size={30} color={'#496a85'}/>
const Profile = ({task, closeProfile}) => {

    const openURL = (url) => {
        if (url) {
            Linking.openURL(url);
        } else {
            Alert.alert("Error", "URL no disponible.");
        }
    };

    return (
        <View style={styles.item}>
            <View style={styles.supimage}>
                <View style={styles.leftSide}>
                    <Image source={{uri: task.urls.raw}} style={styles.image}/>
                </View>
                <View style={styles.rightSide}>
                    <Text style={{color: 'white'}} onPress={() => openURL(task.user.portfolio_url)}>
                        {task.user.name}
                    </Text>
                    <View style={styles.redes}>
                        <Text style={{color: 'white'}}
                            onPress={() => openURL('https://www.instagram.com/${task.user.instagram_username}')}>
                            {instagram}
                        </Text>
                        <Text style={{color: 'blue'}} onPress={() =>openURL(task.user.portfolio_url)}>
                            {portafolio_url}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerKpi}>
                <View style={styles.kpiR}>
                    {/* 
                    <Image source={require('../../../assets/img.png')}
                        style={styles.image2}
                    /> 
                    */}
                    
                </View>
            </View>
            <View style={styles.boton}>
                <Button title={'Cerrar'} onPress={closeProfile} />
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding:20,
        height: 140,
        width:260,
        backgroundColor: '#102434',
        borderRadius: 20,
        borderWidth:1,
        borderColor:'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    supimage: {
        width: '100%',
        height: '100%',
        flexBasis: '70%',
        display: 'flex',
        flexDirection: 'row'
    },
    leftSide: {
        flexBasics: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    rightSide: {
        flexBasis: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    redes: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    containerKpi: {
        width: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    kpiR: {
        width: 20
    },
    image2: {
        width: 20,
        height: 20
    },
    boton:{
        marginLeft:90
    }

});
export default Profile