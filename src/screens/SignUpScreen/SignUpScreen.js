/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, Alert, ImageBackground, ScrollView, SafeAreaView, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import database from '@react-native-firebase/database';

const SignUpScreen = ({ navigation }) => {
  const window = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleSecondCheckBox, setToggleSecondCheckBox] = useState(false)

  //this authenticates the user, alets of successful signup, and changes page
  const handleSignUp = () => {
    authenticate(username, email, code, password, confirmPassword);
    Alert.alert('Sign up successful');
    navigation.navigate("Dashboard")
  };

  

  //function to only allow sign up if terms are ageed to 
  const checkSignUp = () => {
    if(!toggleCheckBox || !toggleSecondCheckBox) {
      Alert.alert("Please agree to terms")
    } else if(password!=confirmPassword){
      Alert.alert("Passwords do not match")
    }
    else{
      handleSignUp();
    }
  }

 //pushes info to db
  let authenticate = (username, email, code, password, confirmPassword) => {
    database().ref('/accounts').push({
      username: username,
      email: email,
      code: code,
      password: password,
      confirmPassword: confirmPassword,
      
      
    });
  };

  

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
      <View style = {styles.container}>
      <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style = {styles.terms}>
      I confirm that I am least {"\n"}18 years old
      </Text>
      </View>

      <View style = {styles.container}>
      
      <CheckBox
    disabled={false}
    value={toggleSecondCheckBox}
    onValueChange={(newValue) => setToggleSecondCheckBox(newValue)}
  />

  <Text style = {styles.terms}>
      I confirm that I have read and {"\n"}agreed to the terms of {''}
      <Text style={styles.link} onPress={() =>navigation.navigate("Policy")}> 
        policy {"\n"}{"\n"}
        </Text>
      </Text>
      </View>
      
        <CustomButton text="Sign Up"
         onPress={()=>{checkSignUp();}
        } 
         type="QUATERNARY" />
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
    marginHorizontal: 5,
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
  container: {
    flex: 1,
    alignSelf: "baseline",
    justifyContent: "center",
    flexDirection: 'row',
    marginHorizontal: 75,
    
  },
  //align self by doing the amrgin horizontal but get the width/2
  

  
});

export default SignUpScreen;
