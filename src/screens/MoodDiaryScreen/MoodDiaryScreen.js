import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, useWindowDimensions, ImageBackground, Alert, Button} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Modal from "react-native-modal";


const MoodDiaryScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();
  const [selected, setSelected] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };



  return (
    <View style={styles.root}>
    <View style={styles.header}>
      <View style={styles.button}><CustomButton text= "<" onPress={() => navigation.navigate('Dashboard')} type="dropButton"/></View>
      <Text style={styles.title}>
        Mood Diary
      </Text>
    </View>
    <CalendarList
    style={{
  borderWidth: 1,
  borderColor: '#2d4150',
  height: 370
  
}}
horizontal={true}
pagingEnabled={true}


theme={{
  textSectionTitleColor: '#736468',
  dayTextColor: '#2d4150',
  arrowColor: '#736468',
  monthTextColor: '#6D828F',
  indicatorColor: 'blue',
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16,

}}

onDayPress={day => {
  console.log('selected day', day);
}}
onDayLongPress={day => {
  console.log('selected day', day);
}}
monthFormat={'MMMM yyyy'}
onMonthChange={month => {
  console.log('month changed', month);
}}

hideArrows={false}
hideExtraDays={true}
hideDayNames={false}
showWeekNumbers={false}

disableArrowLeft={false}
disableArrowRight={false}
disableAllTouchEventsForDisabledDays={true}

/>  
<View style={styles.buttonWrapper}>
<CustomButton text= "Add an Entry" onPress={() => navigation.navigate('Emotion')} type="PLUS"/>
</View>

<Modal isVisible={isModalVisible} onModalHide={()=> setModalVisible(false)}>
      <View style={styles.modal}>
        <Text style={styles.modalText}>How does the calendar work?</Text>
        <Text style={styles.modalSmallText}>When you tap on "add entry", you will be taken to a selector for your mood
        and a selector for how in control you are. After picking your values, they will be display in the calendar.</Text>
        <Text style={styles.modalText}>What are the dots under the dates?</Text>
        <Text style={styles.modalSmallText}> The colored dots under the dates represent your mood and how in control you are. The first dot from the left
        represents your mood and the dot to the right of that represent how in control you are. The colors are the same as the colors selected when adding
        an entry. Ranging from red to green, in which red represents 1 and green represents 5.</Text>
        
        <Button style={styles.modalButton} title="Hide" onPress={toggleModal} /> 
      </View>
    </Modal>
    <View style={styles.modalWrapper}>
  <CustomButton style={styles.iButton} text="Learn More" onPress={toggleModal} type="INFOSMALL"/>
  <CustomButton text= "Daily Log" onPress={() => navigation.navigate('DailyLog')} type="PLUS"/>
  </View>
  </View>
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
    fontSize: 15,
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

export default MoodDiaryScreen;
