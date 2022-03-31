/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, Alert, KeyboardAvoidingView} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import SignInBackground from '../../../assets/gif/SignInBackGround.gif';
import CustomButton from '../../components/CustomButton';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';




const HomeScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const {height} = useWindowDimensions();


  //this checks if the user is already logged in or not, 
  //if they are, takes them to dashboard
  auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('user logged');
      
      navigation.navigate("Dashboard")
    }
  
  });
  //method to push to database
  //let authenticate = (email, password) => {
   // database().ref('/users').push({
    ////  email: email,
     // password: password,
   // });
  //};

  //checks if user entered info and then calls signIn 
  const handleLogin = () => {
    if(!email || !password){
      Alert.alert('Enter your username and password')
    }
    else{
    signIn(email, password);
    
    
    }
    
  };
  //method to check if user exists in database, signs them in
  const signIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password)
      if (response && response.user) {
        Alert.alert("Success ✅", "Signed in!")
        navigation.navigate('Dashboard'); 
      }
    } catch (e) {
      if(e.code === 'auth/invalid-email'){
        Alert.alert("Invalid email");
        console.error("Invalid email");
      }else if(e.code === 'auth/user-not-found'){
        Alert.alert("User not found");
        console.error("User not found");
       // console.error("User not found")
      }else if(e.code === 'auth/wrong-password'){
        Alert.alert("Invalid password");
        console.error("Invalid password");
       // console.error("User not found")
    }
    else if(e.code === 'auth/too-many-requests'){
      Alert.alert("Too many requests", "Try again later");
      console.error("Too many requests");
     // console.error("User not found")
  }
    console.error(e.message);
  }
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
             onPress={() => {    handleLogin();}
            } 
             type="SECONDARY"/>
          </View>
        </View>
        <CustomButton text= "Forgot Password?" onPress={() => navigation.navigate('Forgot Password')} type="TERTIARY"/>
        <View style={styles.divider}/>
        <CustomButton text="Google" onPress={() => navigation.navigate('Dashboard')} type="GOOGLE"/>
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
