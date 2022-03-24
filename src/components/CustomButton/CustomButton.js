/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({text, onPress, type = "PRIMARY"}) => {

  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.container, styles[`pressed_${type}`]] : [styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container:{
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_PRIMARY:{
    backgroundColor: '#EDE9E9',
  },
  container_SECONDARY:{
    backgroundColor: '#736468',
  },
  container_TERTIARY:{
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    width: 300,
  },
  container_GOOGLE:{
    backgroundColor: '#FFF',
    width: 300,
  },
  pressed_PRIMARY:{
    backgroundColor: '#D5D2D2',
  },
  pressed_SECONDARY:{
    backgroundColor: '#675A5E',
  },
  pressed_TERTIARY:{
    width: 300,
  },
  pressed_GOOGLE:{
    backgroundColor: '#EEE',
    width: 300,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 24,
  },
  text_PRIMARY:{
    color: '#736468',
  },
  text_SECONDARY: {
    color: '#EDE9E9',
  },
  text_TERTIARY: {
    color: '#EDE9E9',
    fontSize: 18,
  },
  text_GOOGLE: {
    color: '#D3473C',
  },
})

export default CustomButton;
