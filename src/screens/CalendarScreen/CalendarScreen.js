import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, Button} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Modal from "react-native-modal";
import Logo from '../../../assets/images/Logo.png';
import SignInBackground from '../../../assets/gif/SignInBackGround.gif';


const CalendarScreen = ({navigation}) => {
//TODO: Add navigation
    return (
        //TODO: Fix html to be in style of react-native
        <View style={styles.root} >
        <View style={styles.header}>
          <View style={styles.button}><CustomButton text= "<" onPress={() => navigation.navigate('Dashboard')} type="dropButton"/></View>
          <Text style={styles.title}>
            Mood Diary
          </Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
//TODO: Add css styling
});

export default CalendarScreen;