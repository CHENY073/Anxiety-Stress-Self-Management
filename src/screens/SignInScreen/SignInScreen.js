/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import SignInBackground from '../../../assets/gif/SignInBackGround.gif';
import BrownButton from '../../components/BrownButton';

const SignInScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in');
  }

  return (
    <View style={styles.root}>
      <ImageBackground source={SignInBackground} style={styles.background}>
        <View style={styles.overlay} />
        <Image source={Logo} style={styles.logo, {height: height * 0.35}} resizeMode="contain" />
        <Text>{"\n"}</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <BrownButton text="Login" onPress={onSignInPressed}/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,122,186,0.5)',
  },
  background: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems:'center',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
