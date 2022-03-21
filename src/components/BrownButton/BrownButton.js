/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const BrownButton = ({text, onPress}) => {

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#736468',
    width: '40%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
})

export default BrownButton;
