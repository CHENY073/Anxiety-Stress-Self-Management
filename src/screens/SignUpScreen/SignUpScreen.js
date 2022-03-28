/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions,  ImageBackground, ScrollView, SafeAreaView, } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';

const SignUpScreen = ({ navigation }) => {
  const window = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');





  


  //thinking button where you press sign up

  const onSignUpPressed = () => {
    console.warn('You have signed up');

  };

  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
    
    <View style={styles.root}>
      <SafeAreaView>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
         </SafeAreaView>



         
    
         <CustomButton text= "✖" onPress={() => navigation.navigate('Home')} type="QUINARY"/>
      <Text style = {styles.title}>
        Sign Up 
        
        
      </Text>
      <Text style = {styles.subTitle}>
        Please fill in the fields below
      </Text>
      <CustomInput
      placeholder="Username"
      value={username}
      setValue={setUsername}

      />
      <CustomInput
      placeholder="Email"
      value={email}
      setValue={setEmail}

      //this one needs to be optional
      />
      <CustomInput
      placeholder="Code"
      value={code}
      setValue={setCode}

      />
      <CustomInput
      placeholder="Password"
      value={password}
      setValue={setPassword}
      secureTextEntry

      />
      <CustomInput
      placeholder="Confirm Password"
      value={confirmPassword}
      setValue={setConfirmPassword}
      secureTextEntry

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

      <Text style = {styles.terms}>
      •By signing up you confirm that you are{"\n"} at least 18 years old  and have read and {"\n"} ageed to the terms of {''}
      <Text style={styles.link} onPress={() =>navigation.navigate("Policy")}> 
        policy
        </Text>
      {"\n"}
      
      {"\n"}

      </Text>

        <CustomButton text="Sign Up" onPress={()=>navigation.navigate("Dashboard")} type="QUATERNARY" />
        <Text>
        {"\n"}
        </Text>
   
    </View>
    </ScrollView>
  );
};




const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    width: window.width,
    height: window.height,
    
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
  },
  link: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  

  
});

export default SignUpScreen;
