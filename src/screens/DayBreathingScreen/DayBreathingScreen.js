import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, Alert, ImageBackground, Animated} from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
import SignInBackGround from '../../../assets/gif/NightSkyGif.gif';

const DayBreathingScreen = ({ route, navigation }) => {

 return (
     <SafeAreaView style={styles.root}>
       <ImageBackground source={SignInBackGround} style={styles.background}>
         <View style={styles.overlay} />
         <View style={styles.header}>
           <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
           <Image source={Logo} style={styles.logo} resizeMode="cover" />
           <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
         </View>

         <Text style = {styles.title}>
                     4-4-4-4 Day Exercise
         </Text>

         <Text style = {styles.italic}>
                    To help you relax.
         </Text>


         <Text> { "\n\n" } </Text>

         <Text style={styles.baseText}>
               Breathe in through your nose for <Text style={styles.italic}> 4 </Text>
               <Text style={styles.baseText}> seconds.<Text>{"\n"}</Text></Text>
         </Text>

         <Text style={styles.baseText}>
                        Hold your breathe for <Text style={styles.italic}> 4 </Text>
                        <Text style={styles.baseText}> seconds.<Text>{"\n"}</Text></Text>
         </Text>

         <Text style={styles.baseText}>
                        Breathe out through mouth for <Text style={styles.italic}> 4 </Text>
                        <Text style={styles.baseText}> seconds.<Text>{"\n"}</Text></Text>
         </Text>


          <View style={styles.button}>
                             <CustomButton text= "Next" onPress={() => navigation.navigate('Breathing')} type="SECONDARY"/>
          </View>

       </ImageBackground>
     </SafeAreaView>
   );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(27,45,108,0.5)',
  },
  background: {
    flex: 1,
    alignItems:'center',

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
  timer: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 50,
  },
  container: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
  },

  title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#ffffff',
      marginVertical: 5,
      textAlign: 'center',
    },
    baseText: {
          fontSize: 22,
          fontWeight: 'normal',
          color: '#ffffff',
          marginVertical: 10,
          textAlign: 'left',
    },
    italic: {
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginVertical: 10,
        textAlign: 'center',
    },
  button:{
      flex: 1,
      flexDirection: "column-reverse",
      paddingBottom: 10,
  },
});


export default DayBreathingScreen;
