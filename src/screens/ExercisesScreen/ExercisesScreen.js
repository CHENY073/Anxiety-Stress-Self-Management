
import React from 'react';
import {View, TouchableOpacity, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const ExercisesScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();
// added coded
// button's styling
 const CustomButton = ({ text, onPress, type }) => {
    const buttonStyle = type === 'blackBackButton' ? styles.blackBackButton : styles.button;
    const buttonTextAlign = type === 'EXERCISE' ? 'center' : 'left';

    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
       <Text style={[styles.buttonText, type === 'blackBackButton' && styles.blackBackButtonText]}>
        {text}
      </Text>
      </TouchableOpacity>
    );
  };
  // end here
  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
      </View>

      <Text style = {styles.title}>
        Rest your Mind
      </Text>
      <Text style = {styles.subtitle}>
        Exercises
      </Text>



    <CustomButton
      text="Destress Your Day"
      onPress={() => navigation.navigate('Day Breathing Screen')}
      type="EXERCISE"
    />



    <CustomButton
      text="Ease Your Sleep"
      onPress={() => navigation.navigate('Breathing Menu Screen')}
      type="EXERCISE"
    />


    <CustomButton
      text="Strengthen Your Focus"
      onPress={() => navigation.navigate('Anxiety Breathing Menu Screen')}
      type="EXERCISE"
    />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8B9B3',
  },
  header:{
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },

  // this code in css i have added
  button: {
    width: 340, // Adjust the width as per your requirement
    height: 100, // Adjust the height as per your requirement
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#457F9D',
    borderRadius: 8,
    marginBottom: 10,
  },
  blackBackButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,

  },
  blackBackButtonText: {
    color: 'black',
    fontSize: 30, // You can adjust the font size if needed
    fontWeight: 'bold', // You can adjust the font weight if needed
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  // end here
});
export default ExercisesScreen;
