import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, Alert, ImageBackground, Animated} from 'react-native';
import Svg, {G, Path, Circle} from 'react-native-svg';

import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
import NightSkyGif from '../../../assets/gif/NightSkyGif.gif';

const PrepScreen = ({ route, navigation }) => {

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={NightSkyGif} style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="whiteBackButton"/></View>
          <Image source={Logo} style={styles.logo} resizeMode="cover" />
          <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
        </View>


      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(27,45,108,0.5)',
  },
  background: {
    flex: 1,
    alignItems:'center',

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
  volume:{
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  timer: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 50,
  },
  container: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
  },
  text: {
    position: 'absolute',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default PrepScreen;
