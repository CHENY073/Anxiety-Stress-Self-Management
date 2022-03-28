/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
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
import SettingsScreen from './src/screens/SettingsScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';

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
        <Stack.Screen options ={{headerShown: false}} name="Settings" component={SettingsScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="About Us" component={AboutUsScreen}/>
        
        

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
