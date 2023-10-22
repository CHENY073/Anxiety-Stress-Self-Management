import React, { useState } from 'react';
import {View, Button, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';

import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import Modal from "react-native-modal";

const ChoiceScreen = ({ navigation }) => {
  const window = useWindowDimensions();

    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton text="≡" onPress={() => navigation.navigate('Menu Screen')} type="blackBackButton" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
          </View>
        </View>
      </View>

      <Text style={styles.title}>
        What would you like to do?
      </Text>


      <CustomButton text= "Immediate Exercises" onPress={() => navigation.navigate('Exercises')} type="CHOICE"/>
      <CustomButton text="Daily Roadmap" onPress={() => navigation.navigate('Emotion')} type="CHOICE" />
      <CustomButton text="Monthly Calendar" onPress={() => navigation.navigate('Mood Diary')} type="CHOICE" />
      <CustomButton text="Dashboard" onPress={() => navigation.navigate('StressDataScreen')} type="CHOICE" />

      <View>
        <Modal isVisible={isModalVisible} onModalHide={() => setModalVisible(false)}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>What are Immediate Exercises?</Text>
            <Text style={styles.modalSmallText}>Exercises to help you lower your levels of stress and anxiety. Examples include
              breathing exercises and meditating to relaxing music. Consistently doing these exercises can help us greatly in reaching
              a more relaxed state.</Text>
            <Text style={styles.modalText}>What are Daily Stressors?</Text>
            <Text style={styles.modalSmallText}>Daily stressors are day-to-day issues that cause stress and anxiety. Isolating them
              and focusing on what they are help us understand them better and reduce them. Writing them down helps us keep track of the
              things that cause us harm so we can work to eliminate them.</Text>
            <Button style={styles.modalButton} title="Hide" onPress={toggleModal} />
          </View>
        </Modal>
      </View>

      <CustomButton style={styles.iButton} text="Learn More" onPress={toggleModal} type="INFO" />
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
    textAlign: 'center',
  },
  button:{
    flex: 1,
    flexDirection: "column-reverse",
    paddingBottom: 5,
  },
  modalText:{
    color: 'white',
    fontSize: 30,
    padding: 10,
    textAlign: 'center'
  },
  modalSmallText:{
    flex: 1,
    color: 'white',
    fontSize: 15,
    padding: 10,
    textAlign: 'center'
  },
  modal: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
   
    borderRadius: 25,
    backgroundColor: '#736468',
  },
  stressorView: {
    flexDirection: "row",
  },
  iButton: {
    backgroundColor: "red",
    borderRadius: 20,
  },
});

export default ChoiceScreen;
