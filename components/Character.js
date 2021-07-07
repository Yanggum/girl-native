import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

export default function Character(props) {

  const [chracUrl, setChracUrl] = useState('../images/sayaka_magical.png');

  useEffect(() => {
//    console(props.characterUrl);
//    setChracUrl(props.characterUrl);
  });

  return (
    <Image source={require('../images/sayaka_magical.png')} style={styles.characterImage} />
  );
}

const styles = StyleSheet.create({
  characterImage:{
    flex: 1,
    inset: '0px',
    height: '100%',
    opacity: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 3,
  }
})
