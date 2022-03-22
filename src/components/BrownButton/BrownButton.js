/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const BrownButton = ({text, onPress}) => {

  return (
    <Pressable onPress={onPress} style={({pressed})=>[{backgroundColor: pressed? '#675a5e': '#736468'},styles.container]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
})

export default BrownButton;
