import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import { HomeScreen } from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

const Stack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name='MapScreen'
            component={MapScreen}
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    )
}

export default Stack;