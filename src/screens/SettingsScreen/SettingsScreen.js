import React, {useState} from 'react';
import {View, Text, Switch, Image, StyleSheet, useWindowDimensions, ImageBackground, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Toast from 'react-native-toast-message';
import PushNotification from 'react-native-push-notification';
import Moment from 'moment';
import DatePicker from 'react-native-date-picker'


const SettingsScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();
  const [date, setDate] = useState(new Date())
  
  var m = Moment();
  var newDate = new Date(date)

  // Notifications only work for the Android version. Missing some requirements for iOS notifications

  //Sends a notification daily based on users specified time
  const scheduleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: "my-channel",
      title: "Daily Reminder", // optional
      message: "Hello! Don't forget to fill out your daily entries.", // required
      date: new Date(newDate), // Sends notification at the specified time.
      allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
    
      /* Android Only */
      repeatType: 'day',
      repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.

      
    });
    Toast.show({
      type: 'success',
      text1: 'Notifications scheduled',
      position: 'bottom',
      bottomOffset: 100,
    });
  }

  //Closes all notifications and ends any scheduled notifications
  const closeNotification = () =>
  {
    PushNotification.cancelAllLocalNotifications();
    PushNotification.cancelLocalNotification('my-channel');
    Toast.show({
      type: 'success',
      text1: 'All notifications cleared',
      position: 'bottom',
      bottomOffset: 100,
    });
  }


  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
        
        
    <View style={styles.root}>
    
       
        <CustomButton text= "<" onPress={() => navigation.navigate('Menu Screen')} type="whiteBackButton"/>
        <Text style={styles.title}>
        Settings
      </Text>
        
    
    <View style={styles.top} />

        <Text style={styles.options}>
            {"\n"}{"\n"}
        </Text>

    </View>
   
    <Text style={styles.options}>
      <DatePicker date={date} onDateChange={setDate} mode= 'time' fadeToColor='none'/>
    </Text>

    <Text>
      {"\n"}  
    </Text>
    <CustomButton text= "Schedule Daily Notifications" onPress={() => scheduleNotification()} type="greenButton"/>
    
    <Text>
      {"\n"}  
    </Text>
    <CustomButton text= "End All Notifications" onPress={() => closeNotification()} type="redButton"/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor :'#736467',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginVertical: -35,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  options: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'center',
      marginHorizontal: 30,
      marginVertical: 5,
  },
  
});

export default SettingsScreen;