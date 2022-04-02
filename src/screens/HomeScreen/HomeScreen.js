/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {View, Text, Image, StyleSheet, useWindowDimensions, ToastAndroid, ImageBackground, Alert, KeyboardAvoidingView} from 'react-native';
import Toast from 'react-native-toast-message';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import SignInBackground from '../../../assets/gif/SignInBackGround.gif';
import CustomButton from '../../components/CustomButton';
//import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '14011892852-nkn2h4900prc2kgg6nvubu10p0mscc51.apps.googleusercontent.com',
});
const HomeScreen = ({ navigation }) => {


  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {height} = useWindowDimensions();

 

  //shows toast message on top
  const verifyEmailToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Unverified Email',
      text2: 'Please verify your email',
      autoHide: false,
    });
  }
  const invalidEmailToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Email',
      text2: 'Please enter a valid email',
      autoHide: false,
    });
  }
  const userNotFoundToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Email Not Found',
      text2: 'Please enter your email again',
      autoHide: false,
    });
  }
  const invalidPasswordToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Wrong Password',
      text2: 'Please enter your password again',
      autoHide: false,
    });
  }
  const tooManyRequestsToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Too Many Requests',
      text2: 'Please try again later',
      autoHide: false,
    });
  }
  const emptyInputToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error:',
      text2: 'Please enter your username and password',
      
      autoHide: false,
    });
  }

  const showToastAndroid = () => {
    ToastAndroid.show("SIGNED IN", ToastAndroid.SHORT);};
//this checks if the user is already logged in or not, if they are, takes them to dashboard
 auth().onAuthStateChanged((user) => {
    if (user && user.emailVerified) {
    
    console.log('user logged');
    navigation.navigate("Dashboard");
    }else{
      navigation.navigate("Home");
    }
  });

  //checks if user entered info and then calls signIn 
  const handleLogin = () => {
    if(!email || !password){
      emptyInputToast();
    }else{
      signIn(email, password);
    }
  };

  //method to check if user exists in database, signs them in
  const signIn = async (email, password,) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user && response.user.emailVerified) {
        showToastAndroid();
        navigation.navigate('Dashboard');
      }else if(!response.user.emailVerified){
        verifyEmailToast();

      }
    } catch (e) {
      if(e.code === 'auth/invalid-email'){
        invalidEmailToast();
        //console.error("Invalid email");
      }else if(e.code === 'auth/user-not-found'){
        userNotFoundToast();
        //console.error("User not found");
       
      }else if(e.code === 'auth/wrong-password'){
        invalidPasswordToast();
        //console.error("Invalid password");
       
      }else if(e.code === 'auth/too-many-requests'){
        tooManyRequestsToast();
        //console.error("Too many requests");
     
  }
    //outputs any issues with authentication
    console.error(e.message);
  }
}
const handleGoogle = () =>{
  //signInGoogle();
  //navigation.navigate('Dashboard');
};

const signInGoogle = async () => {
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
 const userSignIn = auth().signInWithCredential(googleCredential);

 userSignIn.then((user) =>{
   console.log(user);
 })
 .catch ((e) => {
   console.log(e);
 })
}

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.root, {height: height}}>
      <ImageBackground source={SignInBackground} style={styles.background}>
        <View style={styles.overlay} />
        <Image source={Logo} style={styles.logo, {height: height * 0.35}} resizeMode="contain" />
        <Text>{"\n"}</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <View style={styles.buttonRowContainer}>
          <View style={styles.buttonRowInner}>
            <CustomButton text="Sign Up" onPress={() => navigation.navigate('Sign Up')} type="PRIMARY"/>
            <CustomButton text="Login"
             onPress={() => {handleLogin();}}
             type="SECONDARY"/>
          </View>
        </View>
        <CustomButton text= "Forgot Password?" onPress={() => navigation.navigate('Forgot Password')} type="TERTIARY"/>
        <View style={styles.divider}/>
        <CustomButton text="Google" onPress={signInGoogle} type="GOOGLE"/>
        <Toast />
      </ImageBackground>
    </KeyboardAvoidingView>
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
    justifyContent: 'center',
    alignItems:'center',
  },
  logo: {
    maxWidth: 300,
    maxHeight: 200,
  },
  buttonRowContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 5,
  },
  buttonRowInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  divider:{
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: '#EDE9E9',
    margin: 5,
  },
});

export default HomeScreen;
