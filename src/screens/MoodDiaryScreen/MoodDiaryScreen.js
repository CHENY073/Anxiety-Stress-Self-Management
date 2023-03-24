import React, {useState, useMemo, useCallback, useEffect} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, Button} from 'react-native';
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
  
  const user = auth().currentUser;
  var db = firestore();
  const test = "Why am i stuck doing this alone?"

  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  userData()
    return () => { ignore = true; }
    },[]);
  
  async function userData(date) {
    const stressorDoc = await db.collection('stressors').doc(user.uid).collection('dates').doc('2023-03-20').get();
    const foodFTDoc = await db.collection('FoodFT').doc(user.uid).collection('dates').doc('2023-03-20').get();
    const dailyLogDoc = await db.collection('DailyLog').doc(user.uid).collection('dates').doc('2023-03-20').get();
    console.log("test");
    return stressorDoc.data();
  }
 

  function toggleModal() {
    setModalVisible(!isModalVisible);
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
            console.log('day selected', day);
            userData(day);
          }}
        />
      </View>  

      <Modal isVisible={isModalVisible} onModalHide={()=> setModalVisible(false)}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>What was your stressor of the day?</Text>
          <Text style={styles.modalSmallText}>Your main stressor for the day was School.</Text>
          <Text style={styles.modalText}>What were your reasons for stress?</Text>
          <Text style={styles.modalSmallText}> Your reasons for stress at School were Homework, Projects, and Exams.</Text>
                
          <Button style={styles.modalButton} title="Close" onPress={toggleModal} /> 
        </View>
      </Modal>
        <View style={styles.modalWrapper}>
          <Text> {"\n"} </Text>
          <CustomButton style={styles.iButton} text="Daily Stressor Data" onPress={toggleModal} type="moodButton"/>
        </View>

        <Modal isVisible={isModalVisible} onModalHide={()=> setModalVisible(false)}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>What was your stressor of the day?</Text>
          <Text style={styles.modalSmallText}>Your main stressor for the day was School.</Text>
          <Text style={styles.modalText}>What were your reasons for stress?</Text>
          <Text style={styles.modalSmallText}> Your reasons for stress at School were Homework, Projects, and Exams.</Text>
                
          <Button style={styles.modalButton} title="Close" onPress={toggleModal} /> 
        </View>
      </Modal>
        <View style={styles.modalWrapper}>
          <Text> {"\n"} </Text>
          <CustomButton style={styles.iButton} text="Food for Thought Data" onPress={toggleModal} type="exercisesButton"/>
        </View>

        <Modal isVisible={isModalVisible} onModalHide={()=> setModalVisible(false)}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>What was your stressor of the day?</Text>
          <Text style={styles.modalSmallText}>Your main stressor for the day was School.</Text>
          <Text style={styles.modalText}>What were your reasons for stress?</Text>
          <Text style={styles.modalSmallText}> Your reasons for stress at School were Homework, Projects, and Exams.</Text>
                
          <Button style={styles.modalButton} title="Close" onPress={toggleModal} /> 
        </View>
      </Modal>
        <View style={styles.modalWrapper}>
          <Text> {"\n"} </Text>
          <CustomButton style={styles.iButton} text="Daily Log Data" onPress={toggleModal} type="moodButton"/>
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
