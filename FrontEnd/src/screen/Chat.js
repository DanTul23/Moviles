import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const arrow = <Icon name={'arrow-up'} size={22} color={'#c1ced9'}/>

const Chat = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')

    const getResultFromOpenApi = async () => {
        try {
            const response = await fetch('http://192.168.73.118:9004/openapi', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt})
            })
            const jsonData = await response.json()
            setResult(`${jsonData.result} `)
        } catch (error) {
            console.log(error)
        }
    }
//y los token utilizados fueron ${jsonData.token}

    return (
        <View style={styles.container}>
            <View style={styles.containertext}>
                <Text style={styles.text}>
                    {'Ingrese el texto que desea clasificar en el siguiente formato(código,Texto):'}
                </Text>

                <Text style={styles.text}>
                    {result}
                </Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt} placeholder="Escriba aqui"/>
            {/*<Button title={'Enviar'} onPress={getResultFromOpenApi}/>*/}

            <TouchableOpacity style={styles.button} onPress={getResultFromOpenApi}>
                <Text style={styles.buttonText}>{arrow}</Text>
            </TouchableOpacity>

            </View>


            

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor:'#0d1117',
        
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#687178',
        borderRadius: 25,
        paddingHorizontal: 10,
    },
    input: {
        color:'white',
        backgroundColor: '#687178',
        borderWidth: 1,
        borderColor:'#939a9f',
        width:'70%',
        borderRadius: 10,
        padding: 10,
        margin: 8
    },
    containertext:{
        width:'90%',
        height:200,
        borderWidth:1,
        borderColor:'#687178',
        borderRadius:30,
        padding:15,
        marginBottom:5,
        backgroundColor:'#0b243e',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#b2cadd',
        justifyContent:'center',
        textAlign:'justify',
        margin:10,
        
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: '#1f466e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
})

export default Chat