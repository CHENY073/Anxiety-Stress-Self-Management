import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, Alert} from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
var Sound = require('react-native-sound');




const BreathingScreen = ({ navigation }) => {
  const [music, setMusic] = useState(null);
  const [cycle, setCycle] = useState(null);

  const window = useWindowDimensions();

  const musicData = ['Rain','Waves','Fire','ex4','ex5'];
  const cycleData = ['1','2','3','5','10'];

  Sound.setCategory('Playback');
  var gentle_waves= new Sound('gentle_waves_sleep.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + gentle_waves.getDuration() + 'number of channels: ' + gentle_waves.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    
  });
  Sound.setCategory('Playback');
  var gentle_rain= new Sound('gentle_rain_sleep.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + gentle_rain.getDuration() + 'number of channels: ' + gentle_rain.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    
  });
  Sound.setCategory('Playback');
  var gentle_fire= new Sound('gentle_fire.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + gentle_fire.getDuration() + 'number of channels: ' + gentle_fire.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    
  });
  
  
  
  

  const handlePress = () => {
    if(!music) Alert.alert('Please pick a music choice');
    else if(!cycle) Alert.alert('Please select the number of cycles');
    else {
      navigation.navigate('Timer', {music: music, cycle: cycle});
      if(music =='Waves'){
        gentle_waves.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
    
      }else if(music=='Rain'){
        gentle_rain.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });


      }else if(music=='Fire'){
        gentle_fire.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });


      }

      }
     

    }

    

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

      <Text style = {styles.title}>
        Music choice?
      </Text>

      <CustomSelect radio={true} data={musicData} onSelect={(value) => setMusic(value)} type="PRIMARY"/>

      <Text style = {styles.title}>
        Number of cycles?
      </Text>

      <CustomSelect radio={true} data={cycleData} onSelect={(value) => setCycle(value)} type="PRIMARY"/>

      <View style={styles.button}>
        <CustomButton text= "Start" onPress={() => handlePress()} type="SECONDARY"/>
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
  volume:{
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
    textAlign: 'center',
  },
  button:{
    flex: 1,
    flexDirection: "column-reverse",
    paddingBottom: 10,
  },
});

export default BreathingScreen;
