import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
//import back from './images/sample_background.png';
//image 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/sample_background.png')} style={styles.backgroundImage}/>
          <View>
            <Image onClick={ () => { alert("Hello World!")}} source={require('./images/sayaka_magical.png')} style={styles.characterImage, {
                      inset: '0px',
                      height: '100%',
                      opacity: 1,
                      position: 'fixed',
                      width: '100%',
                      zIndex: 3}}/>
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover'
  },
  characterImage:{
    flex: 1,
    inset: '0px',
    height: '100%',
    opacity: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 3,
  },
  loginForm: {
    position: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
},
});
