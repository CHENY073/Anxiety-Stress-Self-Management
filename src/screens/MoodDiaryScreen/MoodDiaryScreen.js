import React, {useState, useMemo, useCallback, useEffect} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, Button, FlatList, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';
import Modal from "react-native-modal";
import moment from 'moment';
import Logo from '../../../assets/images/Logo.png';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const MoodDiaryScreen = ({ navigation }) => {
  const {height} = useWindowDimensions();
  const [selected, setSelected] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [stressorData, setStressorData] = useState([]);
  const [foodFTData, setFoodData] = useState([]);
  const [dailyLogData, setDailyData] = useState([]);
  const [indexD, setIndexD] = useState(0);
  const [index, setIndex] = useState(0);


  const user = auth().currentUser;
  var db = firestore();

  const today = new Date();
  const myDate = moment(today).format('YYYY-MM-DD');

  useEffect(() => {
    stressorsData('2023-03-20');
    foodData('2023-03-20');
    dailyData('2023-03-20');
  }, []);

  async function stressorsData(date) {
    try {
      const response = await db.collection('stressors').doc(user.uid).collection('dates').doc(date).get();
      const data = response.data(); // Get the data object from the response

      // Check if the data exists before updating the state
      if (data) {
        setStressorData([data]); // Set the 'stressorData' state as an array with the data object
      } else {
        setStressorData([]); // Data is empty, set an empty array
      }
    } catch (error) {
      console.log(error);
    }
  }


  async function foodData(date) {
    try{
    const foodFTDoc = await db.collection('FoodFT').doc(user.uid).collection('dates').doc(date).get();
    const tempData = [];
      tempData.push(foodFTDoc.data());
      setFoodData(tempData);
    } catch (error){
      console.log(error);
    }
  }

  async function dailyData(date) {
    try{
    const dailyLogDoc = await db.collection('DailyLog').doc(user.uid).collection('dates').doc(date).get();
    const tempData = [];
      tempData.push(dailyLogDoc.data());
      setDailyData(tempData);
    } catch (error){
      console.log(error);
    }
  }

  const fields = useMemo(() =>[
    { label: 'Activity', value: dailyLogData[0]?.activity },
    { label: 'Triggers', value: dailyLogData[0]?.triggers },
    { label: 'Signs', value: dailyLogData[0]?.signs },
    { label: 'Body', value: dailyLogData[0]?.body },
    { label: 'Mind', value: dailyLogData[0]?.mind },
    { label: 'Emotion', value: dailyLogData[0]?.emotion },
    { label: 'Behavior', value: dailyLogData[0]?.behavior },
    { label: 'Anxiety Level', value: dailyLogData[0]?.stressedLevel },
    { label: 'Strategies', value: dailyLogData[0]?.strategies },
  ], [dailyLogData]);

  const data = useMemo(() => [
    { label: 'Who', value: foodFTData[0]?.who },
    { label: 'What', value: foodFTData[0]?.what },
    { label: 'Where', value: foodFTData[0]?.where },
    { label: 'When', value: foodFTData[0]?.when },
    { label: 'Why', value: foodFTData[0]?.why },
  ], [foodFTData]);


  const handleLeftArrowPressDaily = useCallback(() => {
    if (indexD === 0) {
      setIndexD(fields.length - 1);
    } else {
      setIndexD(indexD - 1);
    }
  }, [indexD, fields.length]);

  const handleRightArrowPressDaily = useCallback(() => {
    if (indexD === fields.length - 1) {
      setIndexD(0);
    } else {
      setIndexD(indexD + 1);
    }
  }, [indexD, fields.length]);


  const handleLeftArrowPress = useCallback(() => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }, [index, data.length]);

  const handleRightArrowPress = useCallback(() => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, [index, data.length]);

  return (
//    <ScrollView style={styles.root}>
//      <View style={styles.header}>
//        <View style={styles.button}><CustomButton text= "<" onPress={() => navigation.navigate('Choice')} type="dropButton"/></View>
//        <Text style={styles.title}>
//          Mood Diary
//        </Text>
//      </View>
//
//      <View style={styles.container}>
//      <CalendarStrip
//       style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
//       onDateSelected={day => {
//       const selectedDate = moment(day).format('YYYY-MM-DD'); // Format the date as 'YYYY-MM-DD'
//       foodData(selectedDate);
//       stressorsData(selectedDate);
//      dailyData(selectedDate);
//      }}
//    />
//      </View>
//
//      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
//  <ScrollView style={{ backgroundColor: '#c9d6df', borderRadius: 10, padding: 20 }}>
//    {stressorData.map((item) => (
//      <View style={{ marginBottom: 10 }}>
//        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>Stressors for the Day</Text>
//        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Your stressor for the day was {item.stressor}</Text>
//        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Your selected reasons were: {item.reasons}</Text>
//      </View>
//    ))}
//  </ScrollView>
//</View>
//
//<View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
//  <View style={{ backgroundColor: '#7bb4c8', borderRadius: 10, padding: 20 }}>
//    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
//      <CustomButton onPress={handleLeftArrowPress} type="arrow" text="<" style={{ alignSelf: 'center' }} />
//      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Questions of the Day</Text>
//      <CustomButton onPress={handleRightArrowPress} type="arrow" text=">" style={{ alignSelf: 'center'}} />
//    </View>
//    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data[index]?.label}: {data[index]?.value}</Text>
//  </View>
//</View>
//
//<View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
//  <View style={{ backgroundColor: '#457f9d', borderRadius: 10, padding: 20 }}>
//    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
//      <CustomButton onPress={handleLeftArrowPressDaily} type="arrow" text="<" style={{ alignSelf: 'center' }} />
//      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Daily Log Data</Text>
//      <CustomButton onPress={handleRightArrowPressDaily} type="arrow" text=">" style={{ alignSelf: 'center' }} />
//    </View>
//    <View style={{ height: 40}}>
//      <View style={{ marginBottom: 5 }}>
//        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{fields[indexD]?.label}: {fields[indexD]?.value}</Text>
//        <Text style={{ marginTop: 15 }}>{dailyLogData[indexD]?.reasons}</Text>
//      </View>
//    </View>
//  </View>
//</View>
//<View style={styles.buttonWrapper}>
//<CustomButton text= "Continue" onPress={() => navigation.navigate('OptionScreen')} type="SECONDARY"/>
//      </View>
//    <View style={styles.stressorView}>
//          <CustomButton text= "View Stress Data" onPress={() => navigation.navigate('StressDataScreen')} type="SECONDARY"/>
//          </View>
//    </ScrollView>

//    <ScrollView style={styles.root}>
//      <View style={styles.header}>
//        <View style={styles.button}><CustomButton text= "<" onPress={() => navigation.navigate('Choice')} type="dropButton"/></View>
//        <Text style={styles.title}>
//          Mood Diary
//        </Text>
//      </View>
//
//      <View style={styles.container}>
//        <CalendarStrip
//          style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
//          onDateSelected={day => {
//            const selectedDate = moment(day).format('YYYY-MM-DD'); // Format the date as 'YYYY-MM-DD'
//            foodData(selectedDate);
//            stressorsData(selectedDate);
//          }}
//        />
//      </View>


//    <View style={styles.root}>
//        <View style={styles.header}>
//            <View style={styles.button}><CustomButton text="<" onPress={() => navigation.navigate('Choice')} type="dropButton" /></View>
//            <Text style={styles.title}>
//                Monthly Calendar
//            </Text>
//        </View>
//
//
//        <View style={styles.container}>
//                <Calendar
//                    onDayPress={(day) => {
//                        const selectedDate = moment(day.dateString).format('YYYY-MM-DD');
//                    }}
//                    style={{ backgroundColor: 'transparent' }}
//                    theme={{
//                        backgroundColor: 'transparent',
//                        calendarBackground: 'transparent',
//                        dayTextColor: '#000',
//                        todayTextColor: '#0000ff',
//                        textDayFontFamily: 'System',
//                        textDayFontWeight: 'bold',
//                        textDayHeaderFontFamily: 'System',
//                        textDayHeaderFontWeight: 'bold'
//                    }}
//                     markedDates={{
//                        [todayFormatted]: {
//                          selected: true,
//                          marked: true,
//                        }
//                    }}
//                />
//        </View>
//    </View>

    <View style={styles.root}>

       <View style={styles.header}>
           <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <View style={{ marginRight: 100 }}>
                   <Image source={Logo} style={styles.logo} resizeMode="cover" />
               </View>
           </View>
       </View>

        <View style={styles.headerForText}>
            <Text style={styles.title}>
                Monthly Calendar
            </Text>
        </View>

       <View style={styles.container}>
           <Calendar
               onDayPress={(day) => {
                   const selectedDate = myDate
               }}
               style={{ backgroundColor: 'transparent' }}
               theme={{
                   backgroundColor: 'transparent',
                   calendarBackground: 'transparent',
                   dayTextColor: '#000',
                   todayTextColor: '#0000ff',
                   textDayFontFamily: 'System',
                   textDayFontWeight: 'bold',
                   textDayHeaderFontFamily: 'System',
                   textDayHeaderFontWeight: 'bold',
                   textMonthFontWeight: 'bold',
                   textYearFontWeight: 'bold',
                   textSectionTitleColor: '#000',
                   textMonthFontSize: 24,
                   textYearFontSize: 24
               }}
               markedDates={{
                   [myDate]: {
                       selected: true,
                       marked: true,
                   }
               }}
           />
       </View>

     </View>

  );

};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF7F5',
  },
  logo: {
      maxWidth: 75,
      maxHeight: 75,
      marginVertical: 10,
  },
   header:{
      width: '100%',
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
  headerForText: {
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
    flex: 1,
    flexDirection: "column-reverse",
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  stressorView: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
  },
  container: {
        backgroundColor: '#FFF7F5',
  },
});

export default MoodDiaryScreen;
