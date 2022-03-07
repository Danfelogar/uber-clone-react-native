import React from 'react';
import 'react-native-gesture-handler';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';

//components
import { NavOptions } from '../components/NavOptions';

export const HomeScreen = () => {
    console.log('yo soy el api:',GOOGLE_MAPS_APIKEY)
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
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                      }}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
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
