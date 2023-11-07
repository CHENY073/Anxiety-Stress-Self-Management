import React, {useState, useMemo, useCallback, Component, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, useWindowDimensions, ImageBackground, Alert, Button, TextInput} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Logo from '../../../assets/images/Logo.png';
import moment from 'moment';
import Modal from "react-native-modal";

const DailyDataScreen1 = ({navigation, route}) => {
    const { date } = route.params;
    const [data, setData] = useState(null);
    const user = auth().currentUser;
    var db = firestore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("date: " + date);
                const dailyLogDoc = await db.collection('DailyLog').doc(user.uid).collection('dates').doc(date).get();
                if (dailyLogDoc.exists){
                   // console.log(dailyLogDoc);
                    setData(dailyLogDoc._data);
                } else {
                    console.log("no data found")
                }
            } catch (error) {
               console.error(error);
            }
        };
       fetchData();
      }, [date]);
      console.log(data);
    return (
        <ScrollView>
        <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
      <View style={{width: 150}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <View style={{ marginRight: 150 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
            </View>
            </View>
      </View>
      <View style={styles.buttonWrapper}>
      <Text style = {styles.title}>
        Daily Log Data
      </Text>
    
      <View style = {styles.containter}>
        <Text style = {styles.label}>What activity did you do?</Text>
        <Text style = {styles.data}>{data?.activity}</Text>
        <Text style = {styles.label}>What trigger did you experience?</Text>
        <Text style = {styles.data}>{data?.triggers}</Text>
        <Text style = {styles.label}>What sign did you experience?</Text>
        <Text style = {styles.data}>{data?.signs}</Text>
        <Text style = {styles.label}>Body</Text>  
        <Text style = {styles.data}>{data?.body}</Text>
        <Text style = {styles.label}>Mind</Text>
        <Text style = {styles.data}>{data?.mind}</Text>
        <Text style = {styles.label}>Emotions</Text>
        <Text style = {styles.data}>{data?.emotion}</Text>
        <Text style = {styles.label}>Behavior</Text>
        <Text style = {styles.data}>{data?.behavior}</Text>
        <Text style = {styles.label}>How stressed are you?</Text>
        <Text style = {styles.data}>{data?.stressedLevel}</Text>
        <Text style = {styles.label}>What strategies can you use?</Text>
        <Text style = {styles.data}>{data?.strategies}</Text>
      </View>
    
      <View style={styles.button}>
       
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
  data : {
      fontSize: 16,
      fontWeight: 'normal',
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
  modalText:{
    color: 'black',
    fontSize: 28,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  modalSmallText:{
    flex: 1,
    color: 'black',
    fontSize: 18,
    padding: 5,
    textAlign: 'center'
  },
  modal: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
   
    borderRadius: 25,
    backgroundColor: '#7BB4CB',
  },
  iButton: {
    backgroundColor: "red",
    
    borderRadius: 20,
  },
});


export default DailyDataScreen1;
