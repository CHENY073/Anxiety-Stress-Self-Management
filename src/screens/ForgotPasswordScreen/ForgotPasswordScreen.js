/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,Alert, useWindowDimensions, ImageBackground, ScrollView, SafeAreaView, } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');


  const handleReset = async (email) => {
    try{
    await auth().sendPasswordResetEmail(email);
    console.log('password reset sent');
    Alert.alert("Success ✅", "Email sent");
    navigation.navigate("Home");
    }catch (e){
      console.error(e.message);

    }
    
  };

  const doReset = () => {
    if(email === ""){
    Alert.alert("Please enter an email")
    }
    else{
      handleReset();
    }
  }

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
        Forgot Password
        
        
      </Text>
      <Text style = {styles.subTitle}>
        
            Please enter the email {"\n"}corresponding to your {"\n"}            account.
        {"\n"} 
        {"\n"} 
      </Text>
      
      <CustomInput
      placeholder="Email"
      value={email}
      setValue={setEmail}
      />
   
        <CustomButton text="Continue" onPress={()=>doReset(email)} type="continueButton" />
        
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



export default ForgotPasswordScreen;
