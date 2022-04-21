/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const DashboardScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <CustomButton text= "≡" onPress={() => navigation.navigate('Menu Screen')} type="dropButton"/>
      <Text style={styles.title}>
        Dashboard
      </Text>
      <Text>
      {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
      </Text>
      
        <CustomButton text= "Mood Diary" onPress={() => navigation.navigate('Mood Diary')} type="moodButton"/>
        <Text>
          {"\n"}
          
        </Text>
        
        <CustomButton text= "Exercises" onPress={() => navigation.navigate('Choice')} type="exercisesButton"/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 37,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginVertical: -78,
  },
  
});

export default DashboardScreen;
