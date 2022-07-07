import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const AboutUsScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      
        <CustomButton text= "<" onPress={() => navigation.navigate('Menu Screen')} type="whiteBackButton"/>
        <Text style={styles.title}>
        About Us
      </Text>
        
    
 

        <Text style={styles.options}>
            {"\n"}{"\n"}
           
            
        </Text>
        <Text style={styles.normal}>
        {"\n"}{"\n"}  HowRU is an app which seeks to help manage your anxiety and stress. 
        This app provides various features such as a daily mood diary where you can put how you feel each day by asking you various questions.
        Additionally, immediate breathing exercises are available to calm down your anxiety level at a moments notice.
        (...)
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

export default AboutUsScreen;