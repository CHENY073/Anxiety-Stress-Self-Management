import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, Animated} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
import NightSkyGif from '../../../assets/gif/NightSkyGif.gif';
import NightTimeGif from '../../../assets/gif/NightTimeGif.gif';


const NightTimerScreen = ({ route, navigation }) => {
  const [timer, setTimer] = useState(0);

  const window = useWindowDimensions();
  const size = window.width-100;

  const {music, cycle} = route.params;


  const [pos, setPos] = useState(new Animated.ValueXY(0,0));

  const min = Math.floor(timer/60);
  const sec = timer%60 < 10? '0' + (timer%60).toString(): timer%60;
  const stage = Math.ceil(timer/4)%3;
  const text = ['Breathe In','Hold','Breathe Out'];

  const posX = pos.x.interpolate({
    inputRange: [0,1],
    outputRange: [12,232]
  });
  const posY = pos.y.interpolate({
    inputRange: [0,1],
    outputRange: [232,12]
  });


  const animation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pos.y,{
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(pos.x,{
          toValue: 1,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(pos.y,{
          toValue: 0,
          duration: 8000,
          useNativeDriver: true,
        })
      ]),
      {iterations: cycle},
    ).start();
  };

  useEffect(() => {
    pos.x.resetAnimation();
    pos.y.resetAnimation();
    animation();
    setTimer(23*cycle);
    var counter = 0;
    var countdown = setInterval(() => {
      setTimer(lastTimer => {
        lastTimer <= 1 && clearInterval(countdown)
        return lastTimer - 1
      });
      counter++;
      if(counter == 23*cycle){
        clearInterval(countdown);
        pos.stopAnimation();
        navigation.navigate('Dashboard');
      }
    }, 1000);
    return () => clearInterval(countdown)
  },[]);

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={NightSkyGif} style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
          <Image source={Logo} style={styles.logo} resizeMode="cover" />

          <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
        </View>


        <Text style = {styles.timer}>
          {min}:{sec}
        </Text>

        <Image source={NightTimeGif} style={styles.NightTimeGif} />


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
  NightTimeGif: {
    alignItems:'center',
    justifyContent: 'center',
    maxWidth: 400,
    maxHeight: 400,
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
    color: '#FFFFFF',
  },
});

export default NightTimerScreen;