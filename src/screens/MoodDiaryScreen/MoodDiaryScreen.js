import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const MoodDiaryScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();
 


  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.button}><CustomButton text= "<" onPress={() => navigation.navigate('Dashboard')} type="dropButton"/></View>
        <Text style={styles.title}>
          Mood Diary
        </Text>
      </View>
      <CustomButton text= "Slider" onPress={() => navigation.navigate('Emotion')} type="PRIMARY"/>


      <Calendar
      // Initially visible month. Default = now
      
  
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
 
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
    
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={false}
  // Disable right arrow. Default = false
  disableArrowRight={false}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter
 
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>

      
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
  
});

export default MoodDiaryScreen;
