import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, Animated } from 'react-native';
import Svg, {G, Path, Circle, Polygon} from 'react-native-svg';

import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import auth from '@react-native-firebase/auth';

const EmotionScreen = ({ navigation }) => {
  const [value, setValue] = useState(0);
  const [prev, setPrev] = useState(0);
  
  const window = useWindowDimensions();
  const size = window.width-40;


  const AnimatedG = Animated.createAnimatedComponent(G);
  const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
  const [color, setColor] = useState(new Animated.Value(0));
  const [angle, setAngle] = useState(new Animated.Value(3));
  const colorsBG = ['#EDE9E9','#FFD7D7','#FFEBD7','#FFFFE0','#EBFFD7','#D7FFD7'];
  const colors = ['#6D828F','#F07575','#F0B275','#E8E850','#B2F075','#75F075'];
  const text = ['','Angry','Sad','Indifferent','Happy','Excited'];
  const imgSize = 15;
  const imgAttributes = {['stroke']: '#000', ['strokeWidth']: 5,['scale']: imgSize/100, ['x']: -35.7, ['y']: -31.6, ['origin']: '50, 50'};

  const backgroundStyle = {
    backgroundColor: color.interpolate({
      inputRange: (prev<value)? [prev,value] : [value,prev],
      outputRange: (prev<value)? [colorsBG[prev],colorsBG[value]] : [colorsBG[value],colorsBG[prev]]
    }),
  };

  const rotationStyle = {
    transform: [
      {translateX: 50},
      {translateY: 30},
      {rotate: angle.interpolate({
        inputRange: [1,2,3,4,5],
        outputRange: ['-72deg','-36deg','0deg','36deg','72deg']
      })},
      {translateX: -50},
      {translateY: -30},
    ],
  };

  const textStyle = {
    color: (prev == 0)? colors[value] : color.interpolate({
      inputRange: (prev<value)? [prev,value] : [value,prev],
      outputRange: (prev<value)? [colors[prev],colors[value]] : [colors[value],colors[prev]]
    }),
    opacity: (prev != 0)? 1 : color.interpolate({
      inputRange: [0,value],
      outputRange: [0,1]
    }),
  };

  const handle = (number) => {
    setValue(number);
    Animated.parallel([
      Animated.timing(angle,{
        toValue: number,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(color,{
        toValue: number,
        duration: 1000,
        useNativeDriver: false,
      })
    ]).start(); 
    setPrev(value);
  };

  return (
    <AnimatedSafeAreaView style={[styles.root, backgroundStyle]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
            </View>
            </View>
      </View>

      <Text style = {styles.title}>
        Hello,
        {"\n"}
        How are you feeling?
      </Text>
      
      <Svg height={size/2+size/20} width={size} style={styles.slider}>
        <G scale={size/100} y="20" origin="0, -20">
          <G onPress={() => handle(1)} rotation="0" origin="50, 30">
            <Path fill= {colors[1]} d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            <G rotation="0" {...imgAttributes}>
              <Circle cx="50" cy="50" r="50"/>
              <Path d="m23.7 33.2l16.6 8-17.2 7.2"/>
              <Path d="m76.3 48.4l-17.2-7.2 16.6-8"/>
              <Path d="m26 73.8h48c0 0-23.7-40-48 0z"/>
            </G>
          </G>
          <G onPress={() => handle(2)} rotation="36" origin="50, 30">
            <Path fill= {colors[2]} d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            <G rotation="-36" {...imgAttributes}>
              <Circle cx="50" cy="50" r="50"/>
              <Circle cx="34" cy="43" r="4" fill="#000"/>
              <Circle cx="66" cy="43" r="4" fill="#000"/>
              <Path d="m26.6 72.8c0 0 21.4-30 46.7 0" strokeLinecap='round'/>
            </G>
          </G>
          <G onPress={() => handle(3)} rotation="72" origin="50, 30">
            <Path fill= {colors[3]} d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            <G rotation="-72" {...imgAttributes}>
              <Circle cx="50" cy="50" r="50"/>
              <Circle cx="34" cy="43" r="4" fill="#000"/>
              <Circle cx="66" cy="43" r="4" fill="#000"/>
              <Path d="m33 68h33.6" strokeLinecap='round'/>
            </G>
          </G>
          <G onPress={() => handle(4)} rotation="108" origin="50, 30">
            <Path fill= {colors[4]} d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            <G rotation="-108" {...imgAttributes}>
              <Circle cx="50" cy="50" r="50"/>
              <Circle cx="34" cy="43" r="4" fill="#000"/>
              <Circle cx="66" cy="43" r="4" fill="#000"/>
              <Path d="m26.6 63.5c0 0 21.4 30 46.7 0" strokeLinecap='round'/>
            </G>
          </G>
          <G onPress={() => handle(5)} rotation="144" origin="50, 30">
            <Path fill= {colors[5]} d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            <G rotation="-144" {...imgAttributes}>
              <Circle cx="50" cy="50" r="50"/>
              <Path d="m23.7 33.2l16.6 8-17.2 7.2"/>
              <Path d="m76.3 48.4l-17.2-7.2 16.6-8"/>
              <Path d="m26 60h48c0 0-23.7 40-48 0z"/>
            </G>
          </G>
          <AnimatedG style={rotationStyle}>
            <Polygon fill= {colors[0]} points="50,35 50,25 20,30" rotation="90" origin="50, 30"/>
            <Circle fill= {colors[0]} cx="50" cy="30" r="5"/>
          </AnimatedG>
        </G>
      </Svg>

      <Animated.Text style={[styles.text, textStyle]}>{text[value]}</Animated.Text>

      <View style={styles.button}>
        <CustomButton text= "Continue" onPress={() => navigation.navigate('InControl')} type="SECONDARY"/>
      </View>
    </AnimatedSafeAreaView>
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
  volume:{
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  title:{
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
    textAlign: 'center',
  },
  slider: {
    marginTop: 40,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 20,
  },
  button:{
    flex: 1,
    flexDirection: "column-reverse",
    paddingBottom: 30,
  },
});

export default EmotionScreen;