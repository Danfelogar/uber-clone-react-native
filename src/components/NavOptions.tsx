import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
import { Nav } from '../interfaces/appInterfaces';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    }
];

export const NavOptions = () => {

    const { navigate } = useNavigation<Nav>();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
            data={data}
            keyExtractor={( item )=> item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`} disabled={!origin}>
                    <View style={tw`${ !origin && 'opacity-20'}`}>
                        <Image
                            style={{
                                width: 120, height: 120, resizeMode: 'contain'
                            }}
                            source={{ uri: item.image }}
                        />
                    </View>
                    <Text style={tw`mt-2 text-lg font-semibold`}>{ item.title }</Text>

                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name='arrowright'
                        color='white'
                        type='antdesign'
                        //propiedad para que no moleste typeScript con el Icon
                        tvParallaxProperties={undefined}
                    />
                </TouchableOpacity>
            )}
        />
    )
}
