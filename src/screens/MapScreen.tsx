import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import Map from '../components/Map';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../interfaces/appInterfaces';
//component
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {

    const Stack = createStackNavigator();

    const { navigate } = useNavigation<Nav>();

    return (
        <View>

            <TouchableOpacity onPress={() => navigate('HomeScreen')} style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name='menu' tvParallaxProperties={undefined}/>
            </TouchableOpacity>

            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                <Stack.Screen
                    name='NavigateCard'
                    component={NavigateCard}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='RideOptionsCard'
                    component={RideOptionsCard}
                    options={{
                        headerShown: false,
                    }}
                />
                </Stack.Navigator>
            </View>

        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})