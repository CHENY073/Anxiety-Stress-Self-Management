import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const ExercisesScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.button}><CustomButton text= "<" onPress={() => navigation.goBack()} type="dropButton"/></View>
        <Text style={styles.title}>
          Exercises
        </Text>
      </View>
      <CustomButton text= "4-4-4-4 Day Exercise" onPress={() => navigation.navigate('Day Breathing Screen')} type="CHOICE"/>
      <CustomButton text= "4-7-8 Sleep Exercise" onPress={() => navigation.navigate('Breathing Menu Screen')} type="CHOICE"/>
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
