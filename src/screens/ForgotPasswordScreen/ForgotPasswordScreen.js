/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  return (
    <View style={styles.root, {height: height}}>
        <CustomButton text= "Back" onPress={() => navigation.navigate('Home')} type="SECONDARY"/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ForgotPasswordScreen;
