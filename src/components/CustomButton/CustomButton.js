/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable} from 'react-native';

const CustomButton = ({text, onPress, type}) => {

  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles[`container_${type}`],styles[`pressed_${type}`]] : styles[`container_${type}`]}>
      <Text style={styles.text, styles[`text_${type}`]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container_PRIMARY:{
    backgroundColor: '#FFFFFF',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_SECONDARY:{
    backgroundColor: '#457f9d',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_TERTIARY:{
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    width: 300,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_QUATERNARY:{
    borderWidth:2,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderColor:'#457F9D',
    width: 150,
    padding: 8,
    marginVertical: -5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_QUINARY:{
    borderWidth:0,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    width: 50,
    padding: 8.5,
    marginVertical: -30,
    alignSelf: 'flex-end',
    marginTop: -100,
    borderRadius: 15,
  },
  container_moodButton:{
    
    backgroundColor: '#457f9d',
    width: 380,
    padding: 18,
    alignSelf: 'center',
    borderRadius: 35,
  },
  container_exercisesButton:{
    backgroundColor: '#ec8e96',
    width: 380,
    padding: 18,
    alignSelf: 'center',
    borderRadius: 35,
  },
  container_redButton:{
    backgroundColor: '#f27c7a',
    width: 350,
    padding: 18,
    alignSelf: 'center',
    borderRadius: 30,
  },
  container_greenButton:{
    backgroundColor: '#f27c7a',
    width: 350,
    padding: 18,
    alignSelf: 'center',
    borderRadius: 30,
  },
  container_dropButton:{
    width: 100,
    padding: 10,
    alignSelf: 'flex-start',
    borderRadius: 35,
    marginVertical: 15,
    marginHorizontal: -20,
  },
  container_whiteBackButton:{
    width: 100,
    padding: 10,
    alignSelf: 'flex-start',
    borderRadius: 35,
    marginVertical: -10,
    marginHorizontal: -20,
  },
  container_blackBackButton:{
    width: 100,
    padding: 10,
    alignSelf: 'flex-start',
    borderRadius: 35,
    marginVertical: 15,
    marginHorizontal: -20,
  },
  container_logOutButton:{
    backgroundColor: '#FFFFFF',
    width: 500,
    padding: 5,
    alignSelf: 'center',
    borderRadius: 35,
    marginVertical: 15,
    marginHorizontal: -20,
  }, 
  container_continueButton:{
    borderWidth:2,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderColor:'#457F9D',
    width: 150,
    padding: 8.5,
    marginVertical: -5,
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 200,
  },
  container_submitButton:{
    borderWidth:2,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderColor:'#457F9D',
    width: 150,
    padding: 8.5,
    marginVertical: -5,
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 50,
  },
  container_GOOGLE:{
    backgroundColor: '#FFF',
    width: 300,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  container_CHOICE:{
    backgroundColor: '#457F9D',
    width: 300,
    height: 100,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    
  },
  container_INFO:{
    borderColor: "#ADD8E6",
    backgroundColor: 'white',
    
    width: 155,
    height: 55,
    
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 20,
   
  },
  container_STRESSOR:{
    backgroundColor: '#457f9d',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  container_EXERCISE:{
    backgroundColor: '#457f9d',
    width: 175,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  container_continueFButton:{
    borderWidth:2,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderColor:'#457F9D',
    width: 150,
    padding: 8.5,
    marginVertical: -5,
    alignItems: 'center',
    borderRadius: 25,
   
  },
  container_PLUS:{
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 50,
    width: '90%'

  },
  container_INFOSMALL:{
    borderColor: "#f2a1a6",
    backgroundColor: 'white',
    
    width: 115,
    height: 45,
    
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 20,
   
  },
  
  
  pressed_PRIMARY:{
    backgroundColor: '#457F9D',
  },
  pressed_SECONDARY:{
    backgroundColor: '#457F9D',
  },
  pressed_GOOGLE:{
    backgroundColor: "#EEE",
  },


   text_PRIMARY:{
    fontWeight: 'bold',
    color: '#457F9D',
    fontSize: 24,
  },
  text_SECONDARY: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 18,
  },
  text_QUATERNARY: {
    color: '#457F9D',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text_QUINARY: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 27,
  },
  text_moodButton: {
    color: '#FFFFFF',
    fontSize: 24,
    alignSelf: 'center',
  },
  text_exercisesButton: {
    color: '#FFFFFF',
    fontSize: 24,
    alignSelf: 'center',
  },
  text_redButton: {
    color: '#FFFFFF',
    fontSize: 24,
    alignSelf: 'center',
  },
  text_greenButton: {
    color: '#FFFFFF',
    fontSize: 24,
    alignSelf: 'center',
  },
  text_dropButton: {
    color: 'black',
    fontSize: 40,
    alignSelf: 'center',
  },
  text_whiteBackButton: {
    marginTop: 15,
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
  },
  text_blackBackButton: {
    color: 'black',
    fontSize: 40,
    alignSelf: 'center',
  },
  text_logOutButton: {
    color: '#736467',
    fontSize: 40,
    alignSelf: 'center',
  },
  text_continueButton: {
    color: '#457F9D',
    fontSize: 27,
    fontWeight: 'bold',
  },
  text_continueFButton: {
    color: '#457F9D',
    fontSize: 27,
    fontWeight: 'bold',
  },
  text_submitButton: {
    color: '#457F9D',
    fontSize: 27,
    fontWeight: 'bold',
  },
  text_GOOGLE: {
    fontWeight: 'bold',
    color: '#D3473C',
    fontSize: 24,
  },
  text_CHOICE: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
  text_STRESSOR: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
  text_EXERCISE: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
  text_INFO: {
    color: '#ADD8E6',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    
    paddingBottom: 3

  },text_PLUS:{
    fontWeight: 'bold',
    color: '#736468',
    fontSize: 24,
  },
  text_INFOSMALL: {
    color: '#f2a1a6',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    
    paddingBottom: 3

  },
  
})

export default CustomButton;