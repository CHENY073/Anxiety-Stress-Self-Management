/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Toast from 'react-native-toast-message'
import HomeScreen from './src/screens/HomeScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PolicyScreen from './src/screens/PolicyScreen';
import MoodDiaryScreen from './src/screens/MoodDiaryScreen';
import MenuScreen from './src/screens/MenuScreen';
import AccountScreen from './src/screens/AccountScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import HelpScreen from './src/screens/HelpScreen';
import ExercisesScreen from './src/screens/ExercisesScreen';
import DayBreathingScreen from './src/screens/DayBreathingScreen';
import BreathingMenuScreen from './src/screens/BreathingMenuScreen';
import NightBreathingMenuScreen from './src/screens/NightBreathingMenuScreen';
import EmotionScreen from './src/screens/EmotionScreen';
import InControlScreen from './src/screens/InControlScreen';
import IntentionScreen from './src/screens/IntentionScreen';
import BreathingScreen from './src/screens/BreathingScreen';
import TimerScreen from './src/screens/TimerScreen';
import NightTimerScreen from './src/screens/NightTimerScreen';
import ReasonsScreen from './src/screens/ReasonsScreen';
import FoodFTScreen from './src/screens/FoodFTScreen';
import ChoiceScreen from './src/screens/ChoiceScreen';
import StressorScreen from './src/screens/StressorScreen';
import AwarenessScreen from './src/screens/AwarenessScreen';
import DailyLogScreen from './src/screens/DailyLogScreen/DailyLogScreen';
import AwarenessBehaviorScreen from './src/screens/AwarenessBehaviorScreen';
import AwarenessMindScreen from './src/screens/AwarenessMindScreen';
import AwarenessBodyScreen from './src/screens/AwarenessBodyScreen';
import AwarenessFeelingsScreen from './src/screens/AwarenessFeelingsScreen';
import AnxietyBreathingMenuScreen from './src/screens/AnxietyBreathingMenuScreen';
import AnxietyBreathingScreen from './src/screens/AnxietyBreathingScreen';
import AnxietyTimerScreen from './src/screens/AnxietyTimerScreen';
import OptionScreen from './src/screens/OptionScreen';

const Stack = createNativeStackNavigator();




const app = () => {
  return (
    <NavigationContainer style={styles.root}>
      <Stack.Navigator>
        <Stack.Screen options ={{headerShown: false}} name="Home" component={HomeScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Forgot Password" component={ForgotPasswordScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Sign Up" component={SignUpScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Policy" component={PolicyScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Mood Diary" component={MoodDiaryScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Menu Screen" component={MenuScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Account Screen" component={AccountScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Notifications" component={NotificationsScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="About Us" component={AboutUsScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Help" component={HelpScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Exercises" component={ExercisesScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Day Breathing Screen" component={DayBreathingScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Breathing Menu Screen" component={BreathingMenuScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Night Breathing Menu Screen" component={NightBreathingMenuScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Emotion" component={EmotionScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="InControl" component={InControlScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Intention" component={IntentionScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Breathing" component={BreathingScreen} initialParams={{music: '', cycle: 1}}/>
        <Stack.Screen options ={{headerShown: false}} name="Timer" component={TimerScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Night Timer" component={NightTimerScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Reasons" component={ReasonsScreen} initialParams={{stressor: ''}}/>
        <Stack.Screen options ={{headerShown: false}} name="FoodFT" component={FoodFTScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Choice" component={ChoiceScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Stressor" component={StressorScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Awareness" component={AwarenessScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Daily Log" component={DailyLogScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Awareness Behavior" component={AwarenessBehaviorScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Awareness Mind" component={AwarenessMindScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Awareness Body" component={AwarenessBodyScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Awareness Feelings" component={AwarenessFeelingsScreen}/>        
        <Stack.Screen options ={{headerShown: false}} name="Anxiety Breathing Menu Screen" component={AnxietyBreathingMenuScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Anxiety Breathing Screen" component={AnxietyBreathingScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="Anxiety Timer Screen" component={AnxietyTimerScreen}/> 
        <Stack.Screen options ={{headerShown: false}} name="OptionScreen" component={OptionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default app;
