import React,{ useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View, Image } from 'react-native';

export default function App() {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log('Button Clicked');
  };

  const stackNavigator = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={LandingPage} />
        <Stack.Screen name="Screen2" component={Login} />
      </Stack.Navigator>
    );
  }

  return (
    
    <View style={{flex : 1}}>
    <Image source={require('./assets/greenwavy.png')}
    style={{
      width: 360,
      height: 309,
      position: 'absolute',
      bottom : 0,
      resizeMode: 'cover',
    }}/>
    <View style={{flex : 1}}>
      <Image source={require('./assets/wastenotlogo.png')}
      style={{
        width : '50%',
        height : '50%',
        alignSelf : 'center',
        marginTop : '-4%',
        resizeMode : 'contain'
      }}/>
        <Text
          style={{ marginTop: -36, fontSize: 14, fontWeight: 'normal', textAlign: 'center' }}
        >
          Choose an Option
        </Text>
        <Text
          style={{ marginTop: -60, fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}
        >
          HELLO CUSTOMER
        </Text>
        <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Login}
        options={{
          title: 'Login Page'
        }}/>
        <NavigationContainer>
        <TouchableOpacity onPress={handleButtonClick} style={{ alignSelf: 'center', marginTop: 125 }}>
          <Image
            source={require('./assets/loginbutton.png')}
            style={{
              width: 224, 
              height: 47, 
              resizeMode: 'contain',
            }}
            onPress={(navigation.navigate('Screen2'))}
          />
        </TouchableOpacity>
        <MyStack/>
        </NavigationContainer>
        </Stack.Navigator>
        <NavigationContainer>
        <TouchableOpacity onPress={handleButtonClick} style={{alignSelf: 'center', marginTop: -100 }}>
        <ImageBackground source={require('./assets/registerbtn.png')}
        style={{
          width: 224, 
              height: 48, 
              resizeMode: 'contain'
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center', marginTop: '3%', fontWeight: 'bold' }}>Register</Text>
      </ImageBackground>
      </TouchableOpacity>
      </NavigationContainer>
    </View>
    </View>

  );
}

