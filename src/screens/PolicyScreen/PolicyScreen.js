/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import SignInBackground from '../../../assets/gif/SignInBackGround.gif';
import CustomButton from '../../components/CustomButton';

const PolicyScreen = ({ navigation }) => {

    const {height} = useWindowDimensions();
  
    return (
      <View style={styles.root}>
          
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
         
          <CustomButton text= "✖" onPress={() => navigation.navigate('Sign Up')} type="QUINARY"/>
          <Text style={styles.title}>
              Policy
          </Text>
          <Text>
          There's nothing here for now, come back later
          </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      
    },

    logo: {
      maxWidth: 75,
      maxHeight: 100,
    },
    title: {
      fontSize: 38,
      fontWeight: 'bold',
      color: 'black',
      marginVertical: 80,
      
    }
  });
  

export default PolicyScreen;