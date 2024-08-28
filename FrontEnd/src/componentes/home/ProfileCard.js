import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { Video } from 'expo-av';

const twitter = <Icon name={'x-twitter'} size={30} color={'#c1ced9'}/>
const facebook = <Icon name={'facebook'} size={30} color={'#c1ced9'}/>
const instagram = <Icon name={'instagram'} size={30} color={'#c1ced9'}/>
const linkedin = <Icon name={'linkedin'} size={30} color={'#c1ced9'}/>
const tiktok = <Icon name={'tiktok'} size={30} color={'#c1ced9'}/>



const ProfileCard = () => {
    const user = {
        avatar: "../../../assets/Video.gif",
        coverPhoto: "https://wallpapercave.com/wp/nsu3cSp.jpg",
        name: "Daniel Tulcán"
    }
    
    //USO DE UN GIF
    //<Image source={require("../../../assets/Video.gif")} style={styles.avatar} />
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/sello_400.png")} style={styles.coverPhoto}/>
            
            <View style={styles.avatarContainer}>

                <View style={styles.containervideo}> 
                
                <Video source={require('../../../assets/Video.mp4')}  resizeMode={'contain'} isLooping={true} shouldPlay style={styles.video} />
                
                </View>

                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback  onPress={() => {
                    Linking.openURL('https://facebook.com/')
                }}>
                    {facebook}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    Linking.openURL('https://twitter.com/')
                }}>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    Linking.openURL('https://instagram.com/')
                }}>
                    {instagram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://linkedin.com/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://tiktok.com/')}>
                    {tiktok}
                </TouchableWithoutFeedback>
                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height:'80%',
        flex:0.9,
        alignItems: 'center', //flex y grid
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor:'#162737',
        borderColor:'#234',
        borderWidth:4,
    },
    coverPhoto: {
        width: '100%',
        height: 310,
        marginTop:-30,
        resizeMode: 'cover',
        borderRadius:10,

    },
    avatarContainer: {
        width:150,
        height:250,
        overflow: 'hidden',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: -50,
        borderColor:'#fff',
        //borderWidth:1,
        margin:10,
        marginTop:10,
    },
    containervideo:{
        overflow: 'hidden',
        height:200,
        marginTop:-30,
        borderColor:'#fff',
        //borderWidth:1,
        borderRadius:10,
    },
    avatar: {
        width: 150,
        height: 150,
        //borderRadius: 50,
        //borderWidth: 10,
        //borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#8aa2b6',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: -10,
        width: '90%',
        justifyContent: 'space-between'
    },
    video: {
        width:115,
        height: 200,
        //borderRadius:30
        //borderColor:'#000',
        //borderWidth:1,
        
    },
});
export default ProfileCard