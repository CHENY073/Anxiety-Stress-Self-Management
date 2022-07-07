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

  //Sends a notification daily based on users specified time
  const testSchNoti = () => {
    PushNotification.localNotificationSchedule({
      channelId: "my-channel",
      title: "Daily Reminder", // (optional)
      message: "Hello! Don't forget to fill out your daily entries.", // (required)
      date: new Date(newDate), // Trying to get to fire at a specific time, for 5 seconds into future:  Date.now() + 5 * 1000
      allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
    
      /* Android Only */
      repeatType: 'day',
      repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    });
  }

  //Closes all notifications and ends any scheduled notifications
  const testCloseNoti = () =>
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

    <DatePicker date={date} onDateChange={setDate} mode= 'time'/>
    <Text>
          {"\n"}  
    </Text>
    <CustomButton text= "Schedule Daily Notifications" onPress={() => testSchNoti()} type="greenButton"/>
    
    <Text>
          {"\n"}  
    </Text>
    
    <CustomButton text= "End All Notifications" onPress={() => testCloseNoti()} type="redButton"/>

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
      alignSelf: 'flex-end',
      marginHorizontal: 30,
      marginVertical: 5,
  },
  
});

export default SettingsScreen;