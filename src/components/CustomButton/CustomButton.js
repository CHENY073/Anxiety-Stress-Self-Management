/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({text, onPress, type}) => {

  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={styles.text, styles[`text_${type}`]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container_PRIMARY:{
    backgroundColor: '#FFFFFF',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_SECONDARY:{
    backgroundColor: '#736468',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_TERTIARY:{
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    width: 300,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_QUATERNARY:{
    borderWidth:2,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderColor:'#736468',
    
    width: 150,
    padding: 8.5,
    marginVertical: -5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_QUINARY:{
    borderWidth:0,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    width: 50,
    padding: 8.5,
    marginVertical: -30,
    alignSelf: 'flex-end',
    marginTop: -100,
    borderRadius: 15,
  },
   text_PRIMARY:{
    fontWeight: 'bold',
    color: '#736468',
    fontSize: 24,
  },
  text_SECONDARY: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 18,
  },
  text_QUATERNARY: {
    
    color: '#736468',
    fontSize: 27,
    fontWeight: 'bold',
    
  },
  text_QUINARY: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 27,
    
    
  },
})

export default CustomButton;
