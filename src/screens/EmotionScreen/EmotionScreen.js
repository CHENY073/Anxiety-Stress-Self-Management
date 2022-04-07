import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import CustomButton from '../../components/CustomButton';
import Slider from '../../components/Slider/Slider';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';

const EmotionScreen = ({ navigation }) => {
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.navigate('Dashboard')} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

        <Text style = {styles.title}>
          Hi [Name],
          {"\n"}
          What’s your mood?
        </Text>
        <Slider value={value} setValue={setValue} showImages={true}/>


      <CustomButton text= "Continue" onPress={() => navigation.navigate('InControl')} type="SECONDARY"/>


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
  title:{
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default EmotionScreen;