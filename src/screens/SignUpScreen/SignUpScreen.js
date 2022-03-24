/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  


  


  //thinking button where you press sign up

  const onSignUpPressed = () => {
    console.warn('Sign Up');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
    
    <View style={styles.root }>
      <SafeAreaView>
      <Image source={Logo} style={styles.logo, {height: 75}} resizeMode="contain" />
         </SafeAreaView>
    
      <Text style = {styles.title}>
        Sign Up 
        
      </Text>
      <Text>
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
      setValue={email}

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

    


      <CustomButton text="Sign Up" onpress={onSignUpPressed} />

        <CustomButton text= "Back" onPress={() => navigation.navigate('Home')} type="SECONDARY"/>
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
    margin: 10,
  },

  parameters : {
    fontSize: 14,
  },
  logo: {
    maxWidth: 300,
    maxHeight: 200,
  },
  
});

export default SignUpScreen;
