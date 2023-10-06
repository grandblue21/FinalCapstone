import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View, Image } from 'react-native';

export default function App() {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log('Button Clicked');
  };

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
        <TouchableOpacity onPress={handleButtonClick} style={{ alignSelf: 'center', marginTop: 125 }}>
          <Image
            source={require('./assets/loginbutton.png')}
            style={{
              width: 224, 
              height: 47, 
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonClick} style={{alignSelf: 'center', marginTop: -100 }}>
        <ImageBackground source={require('./assets/Tenant.png')}
        style={{
          width: 224, 
              height: 48, 
              resizeMode: 'contain'
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center', marginTop: '3%', fontWeight: 'bold' }}>Register</Text>
      </ImageBackground>
      </TouchableOpacity>
    </View>
    </View>

  );
}

