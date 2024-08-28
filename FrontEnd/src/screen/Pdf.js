import React, {useState} from "react";
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity} from "react-native";
import * as ExpoDocumentPicker from "expo-document-picker";
import axios from 'axios';
import { ToastAndroid } from 'react-native';



const Pdf = () => {
    const [pdfDoc, setPdfDoc] = useState(null)
    const [question, setQuestion] = useState('')
    const [result, setResult] = useState('')

    const handleFilePicker = async () => {
        let result = await ExpoDocumentPicker.getDocumentAsync({copyToCacheDirectory: true});
        if (result.type !== 'cancel') { // Asegurarse de que no se canceló la selección
            
            if (result.assets[0].mimeType === 'application/pdf') {
                setPdfDoc(result);
                ToastAndroid.show('PDF cargado exitosamente', ToastAndroid.SHORT);
            } else {
                ToastAndroid.show('El archivo seleccionado no es un PDF', ToastAndroid.SHORT);
            }
        }
        
        //setPdfDoc(result.uri);
    }
    const handleUpload = async () => {
        try {
            const data = new FormData();
            data.append('question', question);
            //console.log(data.get('file'));
            const file1 = {
                uri: pdfDoc.assets[0].uri, 
                name: pdfDoc.assets[0].name, 
                type: pdfDoc.assets[0].mimeType
            };

            data.append('file', file1)

            const response = await axios.post("http://192.168.73.118:9004/upload",data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            if (response.status === 200) {
                setQuestion('');
                setResult(response.data.text);
                
                console.log('Respuesta Generada Exitosamente')
            } else {
                console.log('Error in response:', response.statusText);
            }
        } catch (error) {
            console.log('Error al hacer la solicitud:', error.response ? error.response.data : error.message);
        }

    }

    //<Button title={'send'} style={styles.bottonSend} onPress={handleUpload}/>

    return (
        <View style={styles.todo}>
            <Button title={'Cargar PDF'} onPress={handleFilePicker}/>
            <TextInput style={styles.input} value={question} onChangeText={setQuestion} placeholder={'Ingresa tu pregunta'}/>

            <TouchableOpacity style={styles.button} onPress={handleUpload}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <Text style={styles.txt}>{result}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    todo:{
        backgroundColor: '#0d1117',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },

    txt:{
        color:'#fff',
        padding:10,
        margin:10,
        backgroundColor: '#161b22',
        borderRadius: 10,
        borderColor:'#234',
        borderWidth:1,
        height:520,
        justifyContent:'center',
        textAlign:'justify',
    },
    button: {
        backgroundColor: '#2b93e5', // Cambia esto al color que desees
        padding: 10,
        borderRadius: 10,
        width:100,
        alignItems: 'center',
        margin: 10,
        alignSelf: 'center'
    },
    buttonText: {
        margin:6,
        color: '#ffffff',
        
        fontSize: 16,
    },
})
export default Pdf