import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View, Image } from 'react-native';
import Login from './Login';

// Import your other components (LandingPage, Login, etc.) here

export default function App() {
  const stackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <stackNavigator.Navigator initialRouteName="Screen1">
        <stackNavigator.Screen
          name="Screen1"
          component={LandingPage}
          options={{
            title: 'Screen 1', // Set your screen title here
          }}
        />
        <stackNavigator.Screen
          name="Screen2"
          component={Login}
          options={{
            title: 'Screen 2', // Set your screen title here
          }}
        />
      </stackNavigator.Navigator>
      <View style={{ flex: 1 }}>
        <Image
          source={require('./assets/greenwavy.png')}
          style={{
            width: 360,
            height: 309,
            position: 'absolute',
            bottom: 0,
            resizeMode: 'cover',
          }}
        />
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/wastenotlogo.png')}
            style={{
              width: '50%',
              height: '50%',
              alignSelf: 'center',
              marginTop: '-4%',
              resizeMode: 'contain',
            }}
          />
          <Text style={{ marginTop: -36, fontSize: 14, fontWeight: 'normal', textAlign: 'center' }}>
            Choose an Option
          </Text>
          <Text style={{ marginTop: -60, fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
            HELLO CUSTOMER
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Screen2')} // Use navigation prop to navigate to Screen2
            style={{ alignSelf: 'center', marginTop: 125 }}
          >
            <Image
              source={require('./assets/loginbutton.png')}
              style={{
                width: 224,
                height: 47,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Screen2')} // Use navigation prop to navigate to Screen2
            style={{ alignSelf: 'center', marginTop: -100 }}
          >
            <ImageBackground
              source={require('./assets/registerbtn.png')}
              style={{
                width: 224,
                height: 48,
                resizeMode: 'contain',
              }}
            >
              <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center', marginTop: '3%', fontWeight: 'bold' }}>
                Register
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </NavigationContainer>
  );
}
