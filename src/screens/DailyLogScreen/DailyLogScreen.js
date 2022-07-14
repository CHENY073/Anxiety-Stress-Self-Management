import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, useWindowDimensions, ImageBackground, Alert, Button} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Modal from "react-native-modal";
import {Picker} from '@react-native-picker/picker';
import Slider from "react-native-sliders";


import Volume from '../../../assets/images/Volume.png';
import Logo from '../../../assets/images/Logo.png';

const DailyLogScreen = ({navigation}) => {
    const [activity, setActivity] = useState('');
    const [triggers, setTriggers] = useState(0);
    const [signs, setSigns] = useState(0);
    const [anxietyLevel, setAnxietyLevel] = useState(0);
    const [strategies, setStrategies] = useState(0);
  
    const activityData = ['','Exercise 🏃', 'Meditation 🧘', 'Reading 📖'];
    const triggersData = ['','Home', 'School', 'Work', 'Social Life'];
    const signsData = ['','Body', 'Mind', 'Emotion', 'Behavior'];

  
    const strategiesData = ['','Breathing','Positive self-talk', 'Listening to music', 'Talking to a friend', 'Group Support'];
  
    const handlePress = () => {
      if(!activity) Alert.alert('Please pick an activity answer');
      else if(!triggers) Alert.alert('Please pick a triggers answer');
      else if(!signs) Alert.alert('Please pick a signs answer');
    //  else if(!anxietyLevel) Alert.alert('Please pick a number');
      else if(!strategies) Alert.alert('Please pick a strategies answer');
      else navigation.navigate('Intention');
    };

    return (
        <ScrollView>
        <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
      <View style={{width: 150}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 150}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>
      <View style={styles.buttonWrapper}>
      <Text style = {styles.title}>
        Daily Log 
      </Text>

      <View style = {styles.containter}>
        <Text style = {styles.label}>What activity did you do?</Text>
        <CustomInput  value={activity} setValue={setActivity} secureTextEntry={false}/>

        
        <Text style = {styles.label}>What triggers did you experience?</Text>
        <Picker selectedValue={triggers} onValueChange={(itemValue, itemIndex) => setTriggers(itemValue)} style = {styles.picker} numberOfLines={5}>
          {triggersData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>
        
        <Text style = {styles.label}>What signs did you experience?</Text>
        <Picker selectedValue={signs} onValueChange={(itemValue, itemIndex) => setSigns(itemValue)} style = {styles.picker} numberOfLines={5}>
          {signsData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>

        <Text style = {styles.label}>How stressed are you?</Text>
        <Slider
          value={anxietyLevel}
          onValueChange={(anxietyLevel, setAnxietyLevel) => setSigns(anxietyLevel)}
          minimumTrackTintColor= '#de3c3c'
          maximumTrackTintColor= '#5cde3c'
          minimumValue= '0'
          maximumValue= '10'
          step= '2'
        />
        
        <Text style = {styles.label}>What strategies can you use?</Text>
        <Picker selectedValue={strategies} onValueChange={(itemValue, itemIndex) => setStrategies(itemValue)} style = {styles.picker} numberOfLines={5}>
          {strategiesData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>
      </View>

      <View style={styles.button}>
        <CustomButton text= "Submit" onPress={() => handlePress()} type="SECONDARY"/>
      </View>
      </View>
    </SafeAreaView>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,  
    
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  }, 
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  button:{
    flex: 1,
    flexDirection: "column-reverse",
    paddingBottom: 10,
  },
  containter: {
    width: '80%',
  },
  picker: {
    backgroundColor: '#D6CBCB',
    color: '#736468',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#736468',
    marginTop: 2,
  },
  volume:{
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
});


export default DailyLogScreen;
