/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, useWindowDimensions, Animated} from 'react-native';
import Svg, {Circle, G, Path, Polygon, Image} from 'react-native-svg';

const Slider = ({value, setValue, showImages}) => {
  const window = useWindowDimensions();
  const size = window.width-40;

  const icon1 = '../../../assets/images/Logo.png';
  const icon2 = '../../../assets/images/Logo.png';
  const icon3 = '../../../assets/images/Logo.png';
  const icon4 = '../../../assets/images/Logo.png';
  const icon5 = '../../../assets/images/Logo.png';

  const AnimatedG = Animated.createAnimatedComponent(G);
  const [color, setColor] = useState(new Animated.Value(0));
  const [angle, setAngle] = useState(new Animated.Value(0));
  const text = ["","Angry","Sad","Indifferent","Happy","Excited"];

  const backgroundStyle = {
    backgroundColor: color.interpolate({
      inputRange: [0,1,2,3,4,5],
      outputRange: ['#EDE9E9', '#FFD7D7','#FFEBD7','#FFFFD7','#EBFFD7','#D7FFD7']
    }),
  };

  const rotationStyle = {
    transform: [
      {translateX: 50},
      {translateY: 30},
      {rotate: angle.interpolate({
        inputRange: [0,1,2,3,4,5],
        outputRange: ['0deg','18deg','54deg','90deg','126deg','162deg']
      })},
      {translateX: -50},
      {translateY: -30},
    ],
  };

  const textStyle = {
    color: color.interpolate({
      inputRange: [0,1,2,3,4,5],
      outputRange: ['#000', '#F07575','#F0B275','#F0F075','#B2F075','#75F075']
    }),
    opacity: color.interpolate({
      inputRange: [0,1,2,3,4,5],
      outputRange: [0,1,1,1,1,1]
    }),
  };
  
  const handle = (number) => {
    Animated.parallel([
      Animated.timing(angle,{
        toValue: number,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(color,{
        toValue: number,
        duration: 600,
        useNativeDriver: false,
      })
    ]).start(); 
    setValue(number);
  };

  return (
    <Animated.View width={window.width} height={window.height} style={[styles.root, backgroundStyle]} >
      <View style={styles.container}></View>
      <Svg height={size/2+size/20} width={size}>
        <G scale={size/100} y="20" origin="0, -20">
          <G onPress={() => handle(1)} rotation="0" origin="50, 30">
            <Path fill="#F07575" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            {showImages? <Image href={require(icon1)} rotation="-0" origin="14, 18" x="4" y="8" width="20" height="20"/> : <></>}
          </G>
          <G onPress={() => handle(2)} rotation="36" origin="50, 30">
            <Path fill="#F0B275" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            {showImages? <Image href={require(icon2)} rotation="-36" origin="14, 18" x="4" y="8" width="20" height="20"/> : <></>}
          </G>
          <G onPress={() => handle(3)} rotation="72" origin="50, 30">
            <Path fill="#F0F075" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            {showImages? <Image href={require(icon3)} rotation="-72" origin="14, 18" x="4" y="8" width="20" height="20"/> : <></>}
          </G>
          <G onPress={() => handle(4)} rotation="108" origin="50, 30">
            <Path fill="#B2F075" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            {showImages? <Image href={require(icon4)} rotation="-108" origin="14, 18" x="4" y="8" width="20" height="20"/> : <></>}
          </G>
          <G onPress={() => handle(5)} rotation="144" origin="50, 30">
            <Path fill="#75F075" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
            {showImages? <Image href={require(icon5)} rotation="-144" origin="14, 18" x="4" y="8" width="20" height="20"/> : <></>}
          </G>
          <AnimatedG style={rotationStyle}>
            <Polygon fill="#6D828F" points="50,35 50,25 20,30"/>
            <Circle fill="#6D828F" cx="50" cy="30" r="5"/>
          </AnimatedG>
        </G>
      </Svg>
      <View style={styles.container}>
        <Animated.Text style={[styles.text, textStyle]}>{(showImages? text[value]: value)}</Animated.Text>
      </View>
      
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container:{
    flex:1,
  },
  text : {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 20,
  },
})

export default Slider;