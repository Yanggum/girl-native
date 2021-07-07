import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import back from './images/sample_background.png';
//image 

function TextBox(props) {
  const [chatCharacterName, setChatCharacterName] = useState('');
  const [chatLineOne, setChatLineOne] = useState('');

  useEffect(() => {
      console.log(props);
      setChatCharacterName(props.name);
      setChatLineOne(props.text);
  });

  return (
    <View style={styles.chatForm}>
        <Text style={styles.chatCharacNameStyle}>{chatCharacterName}</Text>
        <Text style={styles.chatCharacStyle}>{chatLineOne}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chatForm: {
    backgroundColor: 'black',
    position: 'fixed',    
    opacity: 0.5,
    width: '100%',
    height: '20%',
    bottom: 0,
    left: 0,
    zIndex: 4,
    padding: '2px'
  },
  chatCharacNameStyle:{
    color: 'white',
    fontSize: '20px',
    marginBottom: '10px'
  },
  chatCharacStyle:{
    color: 'white',
    fontSize: '17px',
  }  
});

export default TextBox;
