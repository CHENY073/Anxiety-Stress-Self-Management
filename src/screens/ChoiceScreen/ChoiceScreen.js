import React, { useState } from 'react';
import {View, Button, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';

import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
import Modal from "react-native-modal";

const ChoiceScreen = ({ navigation }) => {
  const window = useWindowDimensions();

  
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const toggleModal1 = () => {
      setModalVisible1(!isModalVisible1);
    };


  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

      

      <Text style = {styles.title}>
        What would you like to do?
      </Text>

        

    <View style={styles.stressorView}>
      
      <CustomButton text= "Immediate Exercises" onPress={() => navigation.navigate('Breathing')} type="CHOICE"/>
        <CustomButton style={styles.iButton} text="i" onPress={toggleModal} type="INFO"/>
        
        </View>
        <View >
  
        <Modal isVisible1={isModalVisible1}>
          <View style={styles.modal}>
            
            <Text style={styles.modalText}>What are Immediate Exercises?</Text>
            <Text style={styles.modalSmallText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis facilisis mauris, id finibus magna laoreet vel. Etiam sagittis quis diam sed aliquam. Quisque nulla ligula, lacinia ut interdum eget, aliquam sed ligula. Vestibulum sodales ante non lectus vulputate, ac vestibulum eros accumsan. Nullam pharetra dolor id sapien ultrices, sit amet convallis turpis fermentum. Vestibulum finibus, ex vel gravida efficitur, ante diam consequat felis, laoreet laoreet felis metus sed lorem. Integer tincidunt suscipit pretium. Aenean scelerisque pharetra dui, vitae maximus neque interdum gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean maximus vitae orci nec tempus. Praesent leo nibh, feugiat non semper ut, dictum sit amet nibh. Nulla facilisi. Ut congue malesuada posuere. Donec vel sem sit amet mi fringilla consectetur ut in lectus. Aenean interdum ex lacus, eget faucibus libero sollicitudin sed. Aenean semper ipsum sit amet est vehicula ultricies.</Text>
  
            <Button style={styles.modalButton} title="Hide" onPress={toggleModal1} />
          </View>
        </Modal>
      </View>
      
  




      

      <View style={styles.stressorView}>
      <CustomButton text= "Daily Stressors" onPress={() => navigation.navigate('Stressor')} type="CHOICE"/>
      <CustomButton style={styles.iButton} text="i" onPress={toggleModal} type="INFO"/>
      </View>
      <View >

     
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          
          <Text style={styles.modalText}>What are Daily Stressors?</Text>
          <Text style={styles.modalSmallText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis facilisis mauris, id finibus magna laoreet vel. Etiam sagittis quis diam sed aliquam. Quisque nulla ligula, lacinia ut interdum eget, aliquam sed ligula. Vestibulum sodales ante non lectus vulputate, ac vestibulum eros accumsan. Nullam pharetra dolor id sapien ultrices, sit amet convallis turpis fermentum. Vestibulum finibus, ex vel gravida efficitur, ante diam consequat felis, laoreet laoreet felis metus sed lorem. Integer tincidunt suscipit pretium. Aenean scelerisque pharetra dui, vitae maximus neque interdum gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean maximus vitae orci nec tempus. Praesent leo nibh, feugiat non semper ut, dictum sit amet nibh. Nulla facilisi. Ut congue malesuada posuere. Donec vel sem sit amet mi fringilla consectetur ut in lectus. Aenean interdum ex lacus, eget faucibus libero sollicitudin sed. Aenean semper ipsum sit amet est vehicula ultricies.</Text>

          <Button style={styles.modalButton} title="Hide" onPress={toggleModal} />
        </View>
        
      </Modal>
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
  modalText:{
    flex: 1,
   
    color: 'white',
    fontSize: 30,
    padding: 10,
    textAlign: 'center'
    
   
  },
  modalSmallText:{
    flex: 5,
   
   
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
