import {Image, StyleSheet, Text, View} from 'react-native';

export default function Task({task}) {
    return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <Image source={{uri:task.urls.regular}} style={styles.image}/>
            <View style={styles.description}>
                <Text style={styles.itemText}>
                    
                    {task.alt_description}
                    
                </Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#161b22',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:20,
        borderWidth:0.2,
        borderColor:'white'
    },
    itemLeft:{
        flexDirection:'row',
        alignItems: 'center'
        
    },
    description:{
        flex: 1, // Ocupa el espacio restante en la fila
        justifyContent: 'center', // Centra verticalmente el contenido de la descripción
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        marginRight:15

    },
    itemText:{
        fontSize: 16,
        color: '#fff',
    }
});
