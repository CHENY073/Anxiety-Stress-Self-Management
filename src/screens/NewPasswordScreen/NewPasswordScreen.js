/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, ScrollView, SafeAreaView, } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';


const NewPasswordScreen = ({ navigation }) => {
  
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //thinking button where you press sign up


  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
    
    <View style={styles.root }>
      
      <SafeAreaView>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
         </SafeAreaView>
         <Text>{"\n"}</Text>

         <CustomButton text= "✖" onPress={() => navigation.navigate('Home')} type="QUINARY"/>
      <Text style = {styles.title}>
        New Password
        
        
      </Text>
      <Text style = {styles.subTitle}>
        
            Enter your new pasword and{"\n"}    confirm that it matches
        {"\n"} 
        {"\n"} 
      </Text>
      
      <CustomInput
      placeholder="New Password"
      value={newPassword}
      setValue={setNewPassword}
      />

      <CustomInput
      placeholder="Confirm Password"
      value={confirmPassword}
      setValue={setConfirmPassword}
      />
       <Text style = {styles.parameters}>
      •Must be longer than 8 characters {"\n"}
      •Must be shorter than 20 characters {"\n"}
      •Cannot have white spaces {"\n"}
      •Must contain at least 1 uppercase {"\n"}
      •Must contain at least 1 lowercase {"\n"}
      •Must contain at least 1 number {"\n"}
      •Must contain at least 1 special character {"\n"}
 
      </Text>
   
        <CustomButton text="Submit" onPress={()=>navigation.navigate("Home")} type="submitButton" />
        
        </View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
   
  },
  title : {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 70,
  },

  parameters : {
    fontSize: 14,
    color: '#736468',
    
    alignSelf: 'flex-start',
    marginHorizontal: 45,
  },
  terms : {
    fontSize: 15,
    color: '#736468',
    
    alignSelf: 'flex-start',
    marginHorizontal: 45,
  },
  logo: {
    maxWidth: 100,
    maxHeight: 100,
    marginVertical: 15,
  },
  subTitle : {
    fontSize: 17,
    
    color: '#000000',
    marginTop: -70,
    alignSelf: 'auto'
  },
  link: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  
});



export default NewPasswordScreen;