import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, useWindowDimensions, ImageBackground, Alert, Button} from 'react-native';
import CustomSelect from '../../components/CustomSelect';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Modal from "react-native-modal";
import {Picker} from '@react-native-picker/picker';

import Volume from '../../../assets/images/Volume.png';

const DailyLogScreen = ({navigation}) => {

    const [activity, setActivity] = useState(0);
    const [triggers, setTriggers] = useState(0);
    const [signs, setSigns] = useState(0);
    const [anxietyLevel, setAnxietyLevel] = useState(0);
    const [strategies, setStrategies] = useState(0);
  
    const activityData = ['','Home', 'Work', 'Social Setting','School'];
    const triggersData = ['','Mind', 'Body', 'Emotion', 'Behavior'];
    const signsData = ['','Insomnia', 'Restlessness', 'Palpitations', 'Difficulty concentrating'];
    const anxietyLevelData = ['','1','2','3','4','5','6','7','8','9','10'];
    const strategiesData = ['','Breathing','Positive self-talk', 'Listening to music', 'Talking to a friend'];
  
    const handlePress = () => {
      if(!activity) Alert.alert('Please pick an activity answer');
      else if(!triggers) Alert.alert('Please pick a triggers answer');
      else if(!signs) Alert.alert('Please pick a signs answer');
      else if(!anxietyLevel) Alert.alert('Please pick a number');
      else if(!strategies) Alert.alert('Please pick a strategies answer');
      else navigation.navigate('Intention');
    };

    return (
        <ScrollView>
        <SafeAreaView>
            <View style={styles.buttonWrapper}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

      <Text style = {styles.title}>
        Daily Log
      </Text>
    
      <View style = {styles.containter}>
      <Text style = {styles.label}>What activity did you do?</Text>
        <Picker selectedValue={triggers} onValueChange={(itemValue, itemIndex) => setTriggers(itemValue)} style = {styles.picker} numberOfLines={5}>
          {activityData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>

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

        <Text style = {styles.label}>Pick a number from 1 - 10 for your anxiety level</Text>
        <Picker selectedValue={anxietyLevel} onValueChange={(itemValue, itemIndex) => setAnxietyLevel(itemValue)} style = {styles.picker} numberOfLines={5}>
          {anxietyLevelData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>

        <Text style = {styles.label}>What strategies did you use?</Text>
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
    padding: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  }, 
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:10,
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
});


export default DailyLogScreen;
