import React, {useState, useMemo, useCallback, Component, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, useWindowDimensions, ImageBackground, Alert, Button, TextInput} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Volume from '../../../assets/images/Volume.png';
import Logo from '../../../assets/images/Logo.png';
import moment from 'moment';


const DailyLogScreen = ({navigation}) => {
    const [activity, setActivity] = useState('');
    const [triggers, setTriggers] = useState(0);
    const [signs, setSigns] = useState(0);
    const [anxietyLevel, setAnxietyLevel] = useState(0);
    const [strategies, setStrategies] = useState(0);
    const [body, setBody] = useState('');
    const [mind, setMind] = useState('');
    const [emotion, setEmotion] = useState('');
    const [behavior, setBehavior] = useState('');
  
    // const activityData = ['','Exercise 🏃', 'Meditation 🧘', 'Reading 📖'];
    const triggersData = ['','Home', 'School', 'Work', 'Social Life'];
    const signsData = ['','Body', 'Mind', 'Emotion', 'Behavior'];
    const bodyData = ['','Headaches','Skin Irriation','High Blood Pressure','Fatigue','Palpitations','Difficulty Breathing'];
    const mindData = ['','Worrying','Muddled Thinking','Impaired Judgement','Indecision','Difficulty Concentrating'];
    const emotionsData = ['','Fear','Irritability','Depression','Apathy','Alienation','Loss of Confidence'];
    const behaviorData = ['','Addiction','Less Appetite','Less Sex Drive','Insomnia','Restlessness','Accident Prone'];
    const stressedLevel = ['','1','2','3','4','5'];
    const strategiesData = ['','Breathing','Positive self-talk', 'Listening to music', 'Talking to a friend', 'Group Support'];
    
  
    const user = auth().currentUser;
    var db = firestore();
    
    const today = new Date();
    const myDate = moment(today).format('YYYY-MM-DD');
     
  

    const handlePress = () => {
      if(!activity) Alert.alert('Please pick an activity answer');
      else if(!triggers) Alert.alert('Please pick a triggers answer');
      else if(!signs) Alert.alert('Please pick a signs answer');
      else if(!anxietyLevel) Alert.alert('Please pick a number');
      else if(!strategies) Alert.alert('Please pick a strategies answer');
      else {
        const dailyLogDoc = db.collection('DailyLog').doc(user.uid).collection('dates').doc(myDate).set({
          activity : activity,
          triggers : triggersData[triggers],
          signs : signsData[signs],
          body : body,
          mind : mind,
          emotion : emotion,
          behavior : behavior,
          stressedLevel : anxietyLevel,
          strategies : strategiesData[strategies]
        })
        navigation.navigate('Intention');
      } 
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
        
        <CustomInput  value={activity} setValue={setActivity} placeholder='Ex. Meditation, Reading, Gym, etc.' secureTextEntry={false}/>

        <Text style = {styles.label}>What trigger did you experience?</Text>
        <Picker selectedValue={triggers} onValueChange={(itemValue, itemIndex) => setTriggers(itemValue)} style = {styles.picker} numberOfLines={5}>
          {triggersData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>
        
        <Text style = {styles.label}>What sign did you experience?</Text>
        <Picker selectedValue={signs} onValueChange={(itemValue, itemIndex) => setSigns(itemValue)} style = {styles.picker} numberOfLines={5}>
          {signsData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>
        
        <Text style = {styles.label}>Body</Text>                
        <CustomInput  value={body} setValue={setBody} placeholder='Ex. Headaches, Fatigue, etc.' secureTextEntry={false}/>
        

        <Text style = {styles.label}>Mind</Text>
        <CustomInput  value={mind} setValue={setMind} placeholder='Ex. Worrying, Indecision, etc.' secureTextEntry={false}/>

        <Text style = {styles.label}>Emotions</Text>
        <CustomInput  value={emotion} setValue={setEmotion} placeholder='Ex. Depression, Anxiety, etc.' secureTextEntry={false}/>

        <Text style = {styles.label}>Behavior</Text>
        <CustomInput  value={behavior} setValue={setBehavior} placeholder='Ex. Insomnia, Restlessness etc.' secureTextEntry={false}/>

        <Text style = {styles.label}>How stressed are you?</Text>
        <Picker selectedValue={anxietyLevel} onValueChange={(itemValue, itemIndex) => setAnxietyLevel(itemValue)} style = {styles.picker} numberOfLines={5}>
          {stressedLevel.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>
        
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
    backgroundColor: '#FFF7F5',
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
    width: '85%',
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
