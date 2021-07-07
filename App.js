import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import TextBox from './components/TextBox'
import Character from './components/Character'
import Background from './components/Background'
//import Common from './components/Common'
//import back from './images/sample_background.png';
//image 

export default function App() {

  const [chracName, setCharacName] = useState('');
  const [chracChat, setChracChat] = useState('');

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }  

  function randomText(){
    let i = getRandomInt(0, 3);
    setCharacName('티아');

    switch (i){
      case 0:
        setChracChat('안녕?');
        break;
      case 1:
        setChracChat('날씨는 정말 좋은데 너무 덥고... 산책이나 갈래? 너무 덥고... 산책이나 갈래? 너무 덥고... 산책이나 갈래?');
        break;
      case 2:
        setChracChat('흐흥~');
        break;
    }

  }

  return (
    <View style={styles.container} onClick={randomText}>
          <Background bgUrl={'../images/sample_background.png'}/>
          <View>
            <Character characterUrl={'../images/sayaka_magical.png'}  />
            {/* 이름은 18자 텍스트 63자까지 */}
            <TextBox name={chracName} text={chracChat}/>
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginForm: {
    position: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
})
