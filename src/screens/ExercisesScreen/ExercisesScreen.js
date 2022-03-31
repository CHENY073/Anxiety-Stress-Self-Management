import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const ExercisesScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      
        <CustomButton text= "≡" onPress={() => navigation.navigate('Dashboard')} type="dropButton"/>
        <Text style={styles.title}>
        Exercises
      </Text>
        <Text>
          {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
          Not sure what goes
          
        </Text>
        
        
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginVertical: -75
  },
  
});

export default ExercisesScreen;
