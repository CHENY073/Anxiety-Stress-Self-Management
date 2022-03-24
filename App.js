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
