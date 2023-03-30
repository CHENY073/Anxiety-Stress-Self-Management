import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, Alert, TextInput, Button} from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
import CustomInput from '../../components/CustomInput';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

const ReasonsScreen = ({ route, navigation }) => {
  const [reasons, setReasons] = useState([]);
  const [reasonsCustom, setReasonsCustom] = useState('');

  const window = useWindowDimensions();

  const {stressor} = route.params;  
  const user = auth().currentUser; 
  
  const today = new Date();
  const myDate = moment(today).format('YYYY-MM-DD');

  var db = firestore();

  const data = {
    'work': ['Colleagues','Boss','Employees','Work Load','Culture','Toxic environment','Communication','Decision Making','Time Management','Dealing with Change'],
    'home': ['Partner','Family','In laws','Children','Financial','Domestic duties','Sickness'],
    'school': ['Homework','Making new friends','Exam pressure','Performance','Organization','Time management','Work/financial','Bullying'],
    'social': ['Social Media','Bullying','Isolation','Traffic','Friends dispute','Sports performance','Organization','Climate Change','Economic Situation','War','Pandemic'],
    '': [],
  };

  const handlePress = () => {
    if(reasons.length < 1) Alert.alert('Please pick a reason');
    else{
      const stressorsDoc = db.collection('stressors').doc(user.uid).collection('dates').doc(myDate).set({
        stressor : stressor,
        reasons : reasons
      })
      navigation.navigate('FoodFT');
    } 
  };

  const handleAdd = () =>{
    if (reasonsCustom !== ''){
      setReasons([...reasons,reasonsCustom]);
      setReasonsCustom('');
    }
  };

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

      <Text style = {styles.title}>
        What are your {stressor} stressors?
      </Text>

      <CustomSelect data={data[stressor]} onSelect={(value) => setReasons(value)} type="SECONDARY"/>
      <CustomInput
        value={reasonsCustom} setValue={setReasonsCustom} placeholder="Add Custom Reasons"
      />      

      <Button color = '#F2A1A6' title="Add" onPress={handleAdd}/>

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
    backgroundColor: '#FFF7F5',
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
