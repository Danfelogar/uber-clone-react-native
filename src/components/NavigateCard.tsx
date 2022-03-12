import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from 'react-native-dotenv';
import tw from 'twrnc';

import { Nav } from '../interfaces/appInterfaces';
import { setDestination } from '../slices/navSlice';
import NavFavourite from './NavFavourite';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    // console.log('yo soy el api:',GOOGLE_MAPS_APIKEY);
    const dispatch = useDispatch();
    const { navigate } = useNavigation<Nav>();

    return (
    <SafeAreaView style={ tw`bg-white flex-1` }>
        <Text style={tw`text-center py-5 text-xl`}>NavigateCard</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    styles={ toInputBoxStyles }
                    fetchDetails
                    enablePoweredByContainer={false}
                    textInputProps={{
                        returnKeyType: 'search'
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    minLength={2}
                    onPress={(data, details = null) =>{
                        dispatch(setDestination({
                            location: details?.geometry.location,
                            description: data.description
                        }))

                        navigate('RideOptionsCard')
                        // console.log('yo soy data:',data, 'yo soy details:',details);
                    }}
                    debounce={400}
                />
                <NavFavourite />

                <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                    <TouchableOpacity
                    onPress={() => navigate('RideOptionsCard')}
                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                        <Icon
                        name='car'
                        type='font-awesome'
                        color='white'
                        size={16}
                        //propiedad para que no moleste typeScript con el Icon
                        tvParallaxProperties={undefined}
                        />
                        <Text style={tw`text-white text-center`}>Rides</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                        <Icon
                        name='fast-food-outline'
                        type='ionicon'
                        color='black'
                        size={16}
                        //propiedad para que no moleste typeScript con el Icon
                        tvParallaxProperties={undefined}
                        />
                        <Text style={tw`text-center`}>Eats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom:0,
    },
})