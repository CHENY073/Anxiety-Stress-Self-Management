import React, {useState, useMemo, useCallback, useEffect} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, Button, FlatList, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';
import Modal from "react-native-modal";
import Moment from 'react-moment';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const MoodDiaryScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();
  const [selected, setSelected] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [stressorData, setStressorData] = useState([]);
  const [foodFTData, setFoodData] = useState([]);
  const [dailyLogData, setDailyData] = useState([]);
  var test = 'test';
  const user = auth().currentUser;
  var db = firestore();

  useEffect(() => {
    stressorsData('2023-03-20');
    foodData('2023-03-20');
    dailyData('2023-03-20');
  }, []);

  async function stressorsData(date) {
    const response = await db.collection('stressors').doc(user.uid).collection('dates').doc(date).get();
      const tempData = [];      
      tempData.push(response.data());      
      setStressorData(tempData);
  }
  
  async function foodData(date) {
    const foodFTDoc = await db.collection('FoodFT').doc(user.uid).collection('dates').doc('2023-03-20').get();
    const tempData = [];      
      tempData.push(foodFTDoc.data());      
      setFoodData(tempData);    
  }

  async function dailyData(date) {
    const dailyLogDoc = await db.collection('DailyLog').doc(user.uid).collection('dates').doc('2023-03-20').get();
    const tempData = [];      
      tempData.push(dailyLogDoc.data());      
      setDailyData(tempData);    
  } 

  return (
    
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.button}><CustomButton text= "<" onPress={() => navigation.navigate('Dashboard')} type="dropButton"/></View>
        <Text style={styles.title}>
          Dashboard
        </Text>
      </View>      

      <View style={styles.container}>
        <CalendarStrip
          style={{height:100, paddingTop: 10, paddingBottom: 10}}

          onDateSelected = {day =>{
            console.log('day selected', day.format('YYYY-MM-DD'));            
          }}
        />
      </View>       

      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          {stressorData.map((item) => (
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Your stressor for the day was : {item.stressor}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Your selected reasons were : {item.reasons}</Text>
              
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          {foodFTData.map((item) => (
            <View style={{ marginBottom: 10 }}>              
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Food For Though Questions of the Day</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Who : {item.who}</Text>              
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>What : {item.what}</Text>              
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Where : {item.where}</Text>              
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>When : {item.when}</Text>              
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Why : {item.why}</Text>             
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          {dailyLogData.map((item) => (
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Daily Log Data</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Activity : {item.activity}</Text>              
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Triggers : {item.triggers}</Text> 
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Signs : {item.signs}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Body : {item.body}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mind : {item.mind}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Emotion : {item.emotion}</Text> 
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Behavior : {item.behavior}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Anxiety Level : {item.stressedLevel}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Strategies : {item.strategies}</Text>
              <Text style={{ marginTop: 15 }}>{item.reasons}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

    </View>
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
    padding: 30,
  },
  button: {
    position: 'absolute',
    left: 0,
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
  modalText:{
    color: 'white',
    fontSize: 30,
    padding: 10,
    textAlign: 'center'
  },
  modalSmallText:{
    flex: 1,
    color: 'white',
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  modal: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: '#736468',
  },
  iButton: {
    backgroundColor: "red",
    borderRadius: 20,
  },
  modalWrapper:{
    justifyContent:'center',
    alignItems: 'center',
    paddingTop:10,
  }
  
});

export default MoodDiaryScreen;
