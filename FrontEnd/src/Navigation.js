import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListComponent from "./componentes/list/List";
import User from './screen/User'
import Chat from "./screen/Chat";
import Pdf from "./screen/Pdf";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="My Home" component={Menu} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({size}) => (
                    <MaterialCommunityIcons name="home" color={'#00c5ff'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Listado de Perfiles'} component={ListComponent} options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({size}) => (
                    <MaterialCommunityIcons name={'clipboard-list'} color={'#3eb99d'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Crear Perfil'} component={User} options={{
                tabBarLabel: 'Usuario',
                tabBarIcon: ({size}) => (
                    <MaterialCommunityIcons name={'account'} color={'#000'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'openIA'} component={Chat} options={{
                tabBarLabel: 'openIA',
                tabBarIcon: ({size}) => (
                    <MaterialCommunityIcons name={'brain'} color={'#ffadcb'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'ChatPDF'}  component={Pdf} options={{
                tabBarLabel: 'ChatPDF',
                tabBarIcon: ({size}) => (
                    <MaterialCommunityIcons name={'file-pdf-box'} color={'red'} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Navigation