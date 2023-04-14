import React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const ExercisesScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
      </View>

      <Text style = {styles.title}>
        Rest your Mind
      </Text>
      <Text style = {styles.subtitle}>
        Exercises
      </Text>

      <View style={styles.row}>
      <CustomButton text= "Destress your Day" onPress={() => navigation.navigate('Day Breathing Screen')} type="EXERCISE"/>
      <CustomButton text= "Ease your Sleep" onPress={() => navigation.navigate('Breathing Menu Screen')} type="EXERCISE"/>
      </View>
      <View style={styles.row}>
      <CustomButton text= "Calm yourself" onPress={() => navigation.navigate('Anxiety Breathing Menu Screen')} type="EXERCISE"/>
      <CustomButton text= "" onPress={() => navigation.navigate('Anxiety Breathing Menu Screen')} type="EXERCISE"/>
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },
  row:{
    width: '100%',
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: 'space-around',
  },
});

export default ExercisesScreen;
