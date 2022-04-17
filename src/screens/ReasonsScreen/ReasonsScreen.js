import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, Alert} from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';

const ReasonsScreen = ({ navigation }) => {
  const [reasons, setReasons] = useState([]);

  const window = useWindowDimensions();

  const stressor = 'work';

  const data = {
    'work': ['Colleagues','Boss','Employees','Work Load','Culture','Toxic environment','Communication','Decision Making','Time Management','Dealing with Change'],
    'home': ['Partner','Family','In laws','Children','Financial','Domestic duties','Sickness'],
    'school': ['Homework','Making new friends','Exam pressure','Performance','Organization','Time management','Work/financial','Bullying'],
    'social': ['Social Media','Bullying','Isolation','Traffic','Friends dispute','Sports performance','Organization','Climate Change','Economic Situation','War','Pandemic'],
    '': [],
  };

  const handlePress = () => {
    if(reasons.length < 1) Alert.alert('Please pick a reason');
    else navigation.navigate('FoodFT', {back: 'Reasons'});
  };

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.navigate('Stressor')} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

      <Text style = {styles.title}>
        What are your stressors at {stressor}?
      </Text>

      <CustomSelect data={data[stressor]} onSelect={(value) => setReasons(value)} type="SECONDARY"/>

      <View style={styles.button}>
        <CustomButton text= "Continue" onPress={() => handlePress()} type="SECONDARY"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  header:{
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  volume:{
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
    textAlign: 'center',
  },
  button:{
    flex: 1,
    flexDirection: "column-reverse",
    paddingBottom: 10,
  },
});

export default ReasonsScreen;
