import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Home from '../screens/Home';
import Sobre from '../screens/Sobre';
import Contato from '../screens/Contato';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();


export default function AppRouter() {
    return (
    <Drawer.Navigator
        drawerContent={CustomDrawer}
        screenOptions={{
            drawerStyle:{
                backgroundColor:"#878383",
                width:300,
            },
            drawerActiveBackgroundColor:"yellow",
            drawerInactiveBackgroundColor:"blue",
            drawerInactiveTintColor:"#fff",
            drawerActiveTintColor: "#000"
        }}
    >
        <Drawer.Screen name='Home'
        component={Home}
        options={{title: "Inicio"}}
        />
        <Drawer.Screen name='Sobre' component={Sobre}/>
        <Drawer.Screen name='Contato' component={Contato}/>
    </Drawer.Navigator>
    )
}
