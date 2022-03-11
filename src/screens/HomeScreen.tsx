import React from 'react';
import 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { GOOGLE_MAPS_APIKEY } from 'react-native-dotenv';
import tw from 'twrnc';

//components
import { NavOptions } from '../components/NavOptions';
import { setOrigin } from '../slices/navSlice';

export const HomeScreen = () => {
    // console.log('yo soy el api:',GOOGLE_MAPS_APIKEY);

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) =>{
                        dispatch(setOrigin({
                            location: details?.geometry.location,
                            description: data.description
                        }))
                        // console.log('yo soy data:',data, 'yo soy details:',details);
                    }}
                    fetchDetails
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    //wait time
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: 'orange',
    },
});
