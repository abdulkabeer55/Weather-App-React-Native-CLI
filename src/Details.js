import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';
import { deviceHeight, deviceWidth } from './Dimensions';
import { useNavigation } from '@react-navigation/native';

export default function Details(props) {
  const navigation = useNavigation()
  const [data, setData] = useState(null);
  const { name } = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const Data = ({ title, value }) => (
    <View style={styles.dataRow}>
      <Text style={styles.dataTitle}>{title}</Text>
      <Text style={styles.dataValue}>{value}</Text>
    </View>
  );

  if (!data) {
    return null; // Optional loading state or indicator
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/image1.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.imageOverlay}
      >
        <View style={styles.header}>
          <Icon name="arrow-back" size={46} color="white" onPress={() => navigation.goBack()}/>
          <Image
            source={require('../assets/images/user.jpg')}
            style={styles.profileImage}
          />
        </View>

        

        <View style={styles.content}>
          <Text style={styles.cityName}>{name}</Text>
          <Text style={styles.weatherDescription}>
            {data.weather[0].main}
          </Text>
          <Text style={styles.temperature}>
            {(data.main.temp - 273.15).toFixed(2)}° C
          </Text>
          <View style={styles.weatherDetails}>
            <Text style={styles.detailsTitle}>Weather Details</Text>
            <View style={styles.detailsContainer}>
              <Data value={`${data.wind.speed}`} title="Wind" />
              <Data value={`${data.main.pressure}`} title="Pressure" />
              <Data value={`${data.main.humidity}%`} title="Humidity" />

            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 12}}>
            © Abdul Kabeer 2024
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOverlay: {
    opacity: 0.8,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  profileImage: {
    height: 46,
    width: 46,
    borderRadius: 18,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  weatherDescription: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  temperature: {
    fontSize: 64,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  weatherDetails: {
    alignItems: 'center',
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  detailsContainer: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: '100%',
  },
  dataTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataValue: {
    color: 'white',
    fontSize: 18,
  },
});
