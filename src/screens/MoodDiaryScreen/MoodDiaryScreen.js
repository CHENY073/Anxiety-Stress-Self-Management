import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const MoodDiaryScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();
  const [selected, setSelected] = useState();
  const markedDates = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        selectedColor: '#6D828F'
      }
    };
  }, [selected]);

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);



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
    dotColor: '#00adf5',

    
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
      // Initially visible month. Default = now
     
  
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  markedDates={markedDates}
  onDayPress={onDayPress}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  
  // Handler which gets executed on day press. Default = undefined

  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
    
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MMMM yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  
  // Do not show days of other months in month page. Default = false
  hideExtraDays={false}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
 
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
  
/>  
<View style={styles.buttonWrapper}>
<CustomButton text= "Add an Entry" onPress={() => navigation.navigate('Emotion')} type="PLUS"/>
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
  
});

export default MoodDiaryScreen;
