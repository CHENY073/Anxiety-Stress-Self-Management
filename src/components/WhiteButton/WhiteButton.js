/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const WhiteButton = ({text, onPress}) => {

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    fontWeight: 'bold',
    color: '#736468',
    fontSize: 24,
  },
})

export default WhiteButton;
