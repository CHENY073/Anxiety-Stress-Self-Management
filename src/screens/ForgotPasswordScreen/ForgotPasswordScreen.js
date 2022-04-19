/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,Alert, useWindowDimensions, ImageBackground, ScrollView, SafeAreaView, } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';


const ForgotPasswordScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');

  const invalidEmailToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Email',
      text2: 'Please enter a valid email',
      autoHide: false,
    });
  }
  const notFoundToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Email Not Found',
      text2: 'Please check your email or sign up',
      autoHide: false,
    });
  };


  const handleReset = async (email) => {
    try{
    await auth().sendPasswordResetEmail(email);
    console.log('password reset sent');
    Alert.alert("Success ✅", "Email sent");
    navigation.navigate("Home");
    }catch (e){
      if(e.code ==='auth/invalid-email'){
        invalidEmailToast();

      }
      if(e.code ==='auth/user-not-found'){
        notFoundToast();

      } 
    }
    
  }

  const doReset = () => {
    if(email === ""){
    Alert.alert("Please enter an email")
    }
    else{
      handleReset(email);
    }
  }

  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
    
    <View style={styles.root }>
      
      <SafeAreaView>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
         </SafeAreaView>
         

         <CustomButton text= "✖" onPress={() => navigation.navigate('Home')} type="QUINARY"/>
      <Text style = {styles.title}>
        Forgot Password
        
        
        
      </Text>
      <Text style = {styles.subTitle}>
        
            Please enter the email <Text>{"\n"}</Text> corresponding to your account.
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
       
      </Text>
      
      <CustomInput
      placeholder="Email"
      value={email}
      setValue={setEmail}
      />
      <Text>{"\n"}</Text>
   
        <CustomButton text="Continue" onPress={()=>doReset(email)} type="continueFButton" />
        <Text>{"\n"}</Text>
        
        <Toast />
        </View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'space-between'
   
  },
  title : {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 95,
    
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
    alignSelf: 'center',
    textAlign: 'center'
    
  },
  link: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  
 

  
});



export default ForgotPasswordScreen;
