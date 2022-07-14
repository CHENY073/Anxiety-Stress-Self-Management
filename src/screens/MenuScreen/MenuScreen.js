import React, {useState} from 'react';
import {View, Text, Image, Alert, StyleSheet, useWindowDimensions, ImageBackground, ToastAndroid, ScrollView} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import auth from '@react-native-firebase/auth';

const MenuScreen = ({ navigation }) => {


  const {height} = useWindowDimensions();
 
  const showToastAndroid = () => {
    ToastAndroid.show("LOGGED OUT", ToastAndroid.SHORT);};
   
  const signOutGoogle = async () => {
    try {
      if(await GoogleSignin.isSignedIn()===true){
        await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => showToastAndroid());
        
      }
      else {
        auth().signOut();
        showToastAndroid();
        navigation.navigate("Home");
      } 
    } catch (error) 
    {
      console.error(error);
    }
  };

  const user = auth().currentUser;

  
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      
        <CustomButton text= "<" onPress={() => navigation.navigate('Dashboard')} type="whiteBackButton"/>
        <Text style={styles.title}>
        {user.email}
      </Text>
        

        <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
    alignSelf: 'stretch',
  }}
/>

<Text style={styles.options} onPress={() =>navigation.navigate("Account Screen")}> 
Account
        </Text>

        

        <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
    alignSelf: 'stretch',
  }}
/>
<Text>
        {"\n"}
    </Text>
<View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
    alignSelf: 'stretch',
  }}
/>
   
<Text style={styles.options} onPress={() =>navigation.navigate("Settings")}> 
            Settings
        </Text>

        <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
    alignSelf: 'stretch',
  }}
/>
<Text>
        {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
    </Text>

    <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
    alignSelf: 'stretch',
  }}
/>

    <Text style={styles.options} onPress={() =>navigation.navigate("About Us")}> 
            About Us
        </Text>

        <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
    alignSelf: 'stretch',
  }}
/>
<Text>
       
    </Text>

<View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
    alignSelf: 'stretch',
  }}
/>
        <Text style={styles.options} onPress={() =>navigation.navigate("Help")}> 
           Help
        </Text>
        <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
    alignSelf: 'stretch',
  }}
/>
<Text>
        {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
    </Text>


<CustomButton text= "Log Out" onPress={()=>{signOutGoogle(); }
        } 
  type="logOutButton"/>

        <Toast />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    
    backgroundColor :'#736467',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    
    color: 'white',
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 8,
  },
  options: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'flex-end',
      marginHorizontal: 30,
      marginVertical: 5,     
  },
});
export default MenuScreen;