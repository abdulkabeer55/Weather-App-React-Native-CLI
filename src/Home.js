import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

const Home = (props) => {
  const [city, setCity] = useState('');
  const cities = [
    {
      name: 'Karachi',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'Lahore',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'Islamabad',
      image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'Multan',
      image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'Quetta',
      image: require('../assets/images/image7.jpg'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      {/* Main content */}
      <ImageBackground
        source={require('../assets/images/image2.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
            zIndex: 20, // Ensure icons are above the copyright notice
          }}>
          <Icon name="menu" size={46} color="white" />

          <Image
            source={require('../assets/images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: 10,
            zIndex: 10, // Copyright notice background
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 12}}>
            © Abdul Kabeer 2024
          </Text>
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white', marginTop: -45}}>
            Hello User
          </Text>
          <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
            Search The City By The Name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              paddingHorizontal: 10,
              marginTop: 118,
              marginBottom: 20,
            }}>
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation}/>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
