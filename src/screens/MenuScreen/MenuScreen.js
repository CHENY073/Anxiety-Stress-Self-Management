import React, {useState} from 'react';
import {View, Text, Image, Alert, StyleSheet, useWindowDimensions, ImageBackground, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import auth from '@react-native-firebase/auth';

const MenuScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  const handleSignOut = () => {
    try{
    auth().signOut();
    Alert.alert("Success ✅", "Logged out!")
    navigation.navigate("Home")}
    catch (e){
      console.error(e.message)

    }
    
  };


 

  //this authenticates the user
  


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      
        <CustomButton text= "<" onPress={() => navigation.navigate('Dashboard')} type="whiteBackButton"/>
        <Text style={styles.title}>
        [NAME] 
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
        {"\n"}{"\n"}{"\n"}
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
        {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
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


<CustomButton text= "Log Out" onPress={()=>{handleSignOut();}
        } 
  type="logOutButton"/>

        
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