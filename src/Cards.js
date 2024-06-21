import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';

const Cards = ({name, image, navigation}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 10}}
      onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        imageStyle={{borderRadius: 16}}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
      />
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <Text
          style={{
            fontSize: 20,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
            backgroundColor: 'black',
            opacity: 0.8,
            borderRadius: 16,
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
