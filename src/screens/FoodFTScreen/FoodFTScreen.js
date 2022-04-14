 import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, Alert} from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';

const BreathingScreen = ({ navigation }) => {
  const [what, setWhat] = useState(null);
  const [who, setWho] = useState(null);
  const [where, setWhere] = useState(null);
  const [when, setWhen] = useState(null);
  const [why, setWhy] = useState(null);

  const window = useWindowDimensions();

  const whatData = [];
  const whoData = [];
  const whereData = [];
  const whenData = [];
  const whyData = [];

  const handlePress = () => {
    if(!what) Alert.alert('Please pick a what question');
    else if(!who) Alert.alert('Please pick a who question');
    else if(!where) Alert.alert('Please pick a where question');
    else if(!when) Alert.alert('Please pick a when question');
    else if(!why) Alert.alert('Please pick a why question');
    else navigation.navigate('dashboard');
  };

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.navigate('Dashboard')} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

      <Text style = {styles.title}>
        Food for thought
      </Text>

      <View style = {styles.containter}>
        <Text style = {styles.label}>What</Text>

        <Text style = {styles.label}>Who</Text>

        <Text style = {styles.label}>When</Text>

        <Text style = {styles.label}>Where</Text>

        <Text style = {styles.label}>Why</Text>

      </View>

      <View style={styles.button}>
        <CustomButton text= "Submit" onPress={() => handlePress()} type="SECONDARY"/>
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
  containter: {
    width: '80%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 15,
    textAlign: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#736468',
    marginVertical: 5,
  },
  button:{
    flex: 1,
    flexDirection: "column-reverse",
    paddingBottom: 10,
  },
});

export default BreathingScreen;
