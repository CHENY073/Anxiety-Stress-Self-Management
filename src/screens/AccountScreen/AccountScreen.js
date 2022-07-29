import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const AccountScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();
  const user = auth().currentUser;
  const email = user.email;
  const userName= user.displayName;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      
        <CustomButton text= "<" onPress={() => navigation.navigate('Menu Screen')} type="whiteBackButton"/>
        <Text style={styles.title}>
        Account
      </Text>
        
    
 

        <Text style={styles.options}>
            {"\n"}{"\n"}
            
            
        </Text>

        <Text style={styles.normal}>
        {"\n"}{"\n"} Email: {email}
        </Text>
 
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderBottomWidth: 700,
    borderBottomColor: 'white',
    
    backgroundColor :'#736467',
  },
  title: {
    fontSize: 28,
    
    
    color: 'white',
    marginVertical: -35,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  options: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'flex-end',
      marginHorizontal: 30,
      marginVertical: 5,
      
      
  },
  normal: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#000000',
    marginVertical: 45,
    textAlign: 'left',
    position: 'absolute',
  },
});

export default AccountScreen;