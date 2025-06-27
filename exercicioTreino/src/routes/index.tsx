import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import SaibaMais from '../screens/SaibaMais';
import Dicas from '../screens/Dicas';

const Stack = createStackNavigator();
export default function AppRouter() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Dicas' component={Dicas} />
            <Stack.Screen name='SaibaMais' component={SaibaMais}
                options={{
                    title: 'Saiba mais'
                }}
            />
        </Stack.Navigator>
    )
}