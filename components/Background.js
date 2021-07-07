import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

export default function Background(props) {

  const [backgroundUrl, setBackGroundUrl] = useState('');

  useEffect(() => {
    setBackGroundUrl(props.bgUrl);
  });

  return (
    <Image source={require('../images/sample_background.png')} style={styles.backgroundImage} />
  );
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover'
  },
})
