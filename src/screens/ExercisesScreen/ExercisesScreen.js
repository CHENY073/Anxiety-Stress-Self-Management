import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const ExercisesScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.button}><CustomButton text= "≡" onPress={() => navigation.navigate('Dashboard')} type="dropButton"/></View>
        <Text style={styles.title}>
          Exercises
        </Text>
      </View>
      <CustomButton text= "Breathing" onPress={() => navigation.navigate('Breathing')} type="PRIMARY"/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  button: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  
});

export default ExercisesScreen;
