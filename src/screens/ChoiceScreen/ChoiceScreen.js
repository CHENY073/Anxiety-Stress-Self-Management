import React, { useState } from 'react';
import {View, Button, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';

import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
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
        <View style={{width: 100}}><CustomButton text= "≡" onPress={() => navigation.navigate('Menu Screen')} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

      <Text style = {styles.title}>
        What would you like to do?
      </Text>
    <View style={styles.stressorView}>
    <CustomButton text= "Immediate Exercises" onPress={() => navigation.navigate('Exercises')} type="CHOICE"/>
      </View>
      <View >

      <Modal isVisible={isModalVisible} onModalHide={()=> setModalVisible(false)}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>What are Immediate Exercises?</Text>
          <Text style={styles.modalSmallText}> Exercises to help you lower your levels of stress and anxiety. Examples include
          breathing exercises and meditating to relaxing music. Consistently doing these exercises can help us greatly in reaching
          a more relaxed state.</Text>
          <Text style={styles.modalText}>What are Daily Stressors?</Text>
          <Text style={styles.modalSmallText}> Daily stressors are day to day issues that cause stress and anxiety. Isolating them
          and focusing on what they are help us understand them better and reduce them. Writing them down helps us keep track of the 
          things that cause us harm so we can work to elimnate them.</Text>
          <Button style={styles.modalButton} title="Hide" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
    <CustomButton text= "Daily Stressors" onPress={() => navigation.navigate('Daily Log')} type="CHOICE"/>
    <CustomButton style={styles.iButton} text="Learn More" onPress={toggleModal} type="INFO"/>
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
