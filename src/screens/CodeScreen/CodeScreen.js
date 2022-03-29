/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, ScrollView, SafeAreaView, } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';

const CodeScreen = ({ navigation }) => {
  
  const [code, setCode] = useState('');

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
        Enter Code
        
        
      </Text>
      <Text style = {styles.subTitle}>
        
            Enter the 4-digit code that was sent{"\n"}           to your email account
        {"\n"} 
        {"\n"} 
      </Text>
      
      <CustomInput
      placeholder="Code"
      value={code}
      setValue={setCode}
      />
   
        <CustomButton text="Continue" onPress={()=>navigation.navigate("New Password")} type="continueButton" />
        
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



export default CodeScreen;