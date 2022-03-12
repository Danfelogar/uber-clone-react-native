import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Nav, selected } from '../interfaces/appInterfaces';

import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const data =[
  {
    id:'Uber-X-123',
    title:'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id:'Uber-XL-456',
    title:'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id:'Uber-X-789',
    title:'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

//If we have SURGE pricing, this goes up
const SURE_CHANGE_RATE = 1.5;

const RideOptionsCard = () => {

  const { navigate } = useNavigation<Nav>();
  const [selected, setSelected] = useState<selected | null>(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
            <Icon
            name='chevron-left'
            type='fontawesome'
            //propiedad para que no moleste typeScript con el Icon
            tvParallaxProperties={undefined}
            />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item:{ id, title, multiplier, image }, item}) =>(
          <TouchableOpacity
            onPress={() => setSelected(item)}
            // onPress={() => console.log(JSON.stringify(item))}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && 'bg-gray-200'
            }`}>
            <Image
              style={{
                width: 83,
                height: 83,
                resizeMode: 'contain'
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text>{ new Intl.NumberFormat('en-gb',{
              style: 'currency',
              currency: 'USD',
            }).format(
              (travelTimeInformation?.duration?.value * SURE_CHANGE_RATE * multiplier) / 100
            )}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${
              !selected && 'bg-gray-200'
            }`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})