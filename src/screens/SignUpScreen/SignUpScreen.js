/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, Alert, KeyboardAvoidingView, ImageBackground, ScrollView, SafeAreaView, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

var numberRegex = new RegExp("^(?=.*[0-9])");
var specialCharacterRegex = new RegExp("^(?=.*[!@#$%^&*])");
var lowercaseRegex = new RegExp("^(?=.*[a-z])");
var uppercaseRegex = new RegExp("^(?=.*[A-Z])");
var whitespaceRegex = new RegExp("^(?=.*[\\s])");

const SignUpScreen = ({navigation}) => {
  const {height} = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userCode, setUserCode] = useState('');

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleSecondCheckBox, setToggleSecondCheckBox] = useState(false);

  const emailAlreadyInUseToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Email Already In Use',
      text2: 'Please sign in or reset your password',
      autoHide: false,
    });
  };
  const invalidEmailToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Email',
      text2: 'Please enter a valid email',
      autoHide: false,
    });
  };
  const emptyEmailToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Email',
      text2: 'Please enter an email',
      autoHide: false,
    });
  };
  const shortPasswordToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Password is too short',
      autoHide: false,
    });
  };
  const specialCharacterToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Password must contain at least 1 special character',
      autoHide: false,
    });
  };
  const lowercaseToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Password must contain at least 1 lowercase character',
      autoHide: false,
    });
  };
  const uppercaseToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Password must contain at least 1 uppercase character',
      autoHide: false,
    });
  };
  const noNameToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Name',
      text2: 'Please enter a name',
      autoHide: false,
    });
  };
  const matchingPasswordToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Passwords do not match',
      autoHide: false,
    });
  };
  const checkBoxesToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Agree to Terms',
      text2: 'Please check the boxes',
      autoHide: false,
    });
  };




  const handleSignOut = () => {
    try {
      auth().signOut();

      navigation.navigate('Home');
    } catch (e) {
      console.error(e);
    }
  };

  const createUser = async (email, password) => {
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          userCredential.user.sendEmailVerification();
          handleSignOut();
          Alert.alert('✅', 'Please verify your email to log in!');
        });
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        emailAlreadyInUseToast();
      }
      if (e.code === 'auth/invalid-email') {
         invalidEmailToast();
      }
    }
  };

  //this authenticates the user
  const handleSignUp = () => {
    createUser(email,password);
  };

  //function to only allow sign up if terms are ageed to
  const checkSignUp = () => {
    if (!toggleCheckBox || !toggleSecondCheckBox) {
      checkBoxesToast();
    } else if (password != confirmPassword) {
      matchingPasswordToast();
    } else if (password.length < 8) {
      shortPasswordToast();
    } else if (password.length > 20) {
      Alert.alert('Password is too long');
    } else if (!numberRegex.test(password)) {
      Alert.alert('Password must contain at least 1 number');
    } else if (!specialCharacterRegex.test(password)) {
      specialCharacterToast();
    } else if (!lowercaseRegex.test(password)) {
      lowercaseToast();
    } else if (!uppercaseRegex.test(password)) {
      uppercaseToast();
    } else if (whitespaceRegex.test(password)) {
      Alert.alert('Password can not contain whitespace');
    } else if (email === '') {
      emptyEmailToast();
    } else if(name === ''){
      noNameToast();
    }
    else {
      handleSignUp();
    }
  };


  return (
    <KeyboardAvoidingView behavior='padding'style={ {height: height}}>
    <ScrollView>
      
      <View style={styles.root}>
      
      <Image source={Logo} style={ {height: height * 0.15}} resizeMode="contain" />
        <CustomButton
          text="✖"
          onPress={() => navigation.navigate('Home')}
          type="QUINARY"
        />
        
        <Text style={styles.title}>{'\n'}{'\n'}Sign Up</Text>

        <Text style={styles.subTitle}>Please fill in the fields below</Text>

        <CustomInput placeholder="Name" value={name} setValue={setName} />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Code (optional)"
          value={userCode}
          setValue={setUserCode}
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

        <Text style={styles.parameters}>
          •Must be 8 characters or longer {'\n'}
          •Must be 20 characters or shorter {'\n'}
          •Cannot have white spaces {'\n'}
          •Must contain at least 1 uppercase character{'\n'}
          •Must contain at least 1 lowercase character{'\n'}
          •Must contain at least 1 numerical character {'\n'}
          •Must contain at least 1 special character {'\n'}
        </Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>
            I confirm that I am least 18 years old
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleSecondCheckBox}
            onValueChange={newValue => setToggleSecondCheckBox(newValue)}
          />

          <Text>
            I confirm that I have read and agreed to the terms of {''}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Policy')}>
              policy {'\n'}
              {'\n'}
            </Text>
          </Text>
        </View>
        <CustomButton text="Sign Up" onPress={() => {checkSignUp(); }} type="QUATERNARY"/>
        <Text>{'\n'}</Text>

        
      </View>
      
     
      </ScrollView>
      <Toast/>
      
      </KeyboardAvoidingView>
    
    
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
    
  },

  parameters : {
    fontSize: 14,
    color: '#736468',
    
    
  },
  logo: {
    maxWidth: 100,
    maxHeight: 100,
   
  },
  subTitle : {
    fontSize: 17,
    
    color: '#000000',
    
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
    
  },
  checkboxContainer:{
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: "center",
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  //align self by doing the amrgin horizontal but get the width/2
  

  
});

export default SignUpScreen;
