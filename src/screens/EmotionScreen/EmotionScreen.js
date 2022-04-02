import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

import CustomButton from '../../components/CustomButton';
import Slider from '../../components/Slider/Slider';
import Logo from '../../../assets/images/Logo.png';

const EmotionScreen = ({ navigation }) => {
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.navigate('Home')} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <View style={{width: 100}}/>
      </View>
      <Text style = {styles.title}>
        Hi [Name],
      </Text>
      <Text style = {styles.title}>
        What’s your mood?
      </Text>
      <View style = {styles.space}/>
      <Text style = {styles.title}>{value}</Text>
      <CustomButton text= "Continue" onPress={() => navigation.navigate('Home')} type="SECONDARY"/>

      <View style={styles.container}>
        <Slider setValue={setValue}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  header:{
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  title : {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
  },
  container:{
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  space:{
    flex: 1,
  },
});

export default EmotionScreen;
