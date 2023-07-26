import React from 'react';
import {View, TouchableOpacity, SafeAreaView, Text, Image, ImageBackground, StyleSheet, useWindowDimensions} from 'react-native';

import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
import Quads from '../../../assets/images/Quads.png';

const OptionScreen = ({ navigation }) => {
  const window = useWindowDimensions();
  const {height} = useWindowDimensions();
  // this one i have added here
  const CustomButton = ({ text, onPress, type, color }) => {
    const buttonStyle =
      type === 'blackBackButton'
        ? styles.blackBackButton
        : type === 'smallSecondary'
        ? styles.smallSecondaryButton
        : styles.button;

        const buttonTextStyle =
        type === 'blackBackButton' ? styles.blackBackButtonText : type === 'smallSecondary' ? styles.smallButtonText : styles.buttonText;
        const buttonColor = color || '#457F9D'; 
    return (
      <TouchableOpacity style={[buttonStyle, { backgroundColor: buttonColor }]} onPress={onPress}>
        <Text style={[buttonTextStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  };
// ends here
  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton" color="white" /></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>
      
      <Text style = {styles.normal}>
      <Text style={{fontWeight: "bold"}}> What would you like to choose? </Text>
        </Text>

        
      <View style={styles.buttonContainer}>
     <CustomButton
      text="Food for thought" 
      onPress={() => navigation.navigate('FoodFT')}
      type="SECONDARY"
      color="#df7a84"
    />

       
    <CustomButton
      text="Daily Log"
      onPress={() => navigation.navigate('Daily Log')}
      type="SECONDARY"
      color="#df7a84"
    />

        </View>  

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF7F5'
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
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
  },
  row:{
    width: '100%',
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  normal: {
    fontSize: 35,
    fontWeight: 'normal',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },
  quadForm: {
    maxWidth: 400,
    maxHeight: 400,
    marginVertical: 5,
  },
  quadText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'black',
    marginVertical: 1,
    textAlign: 'left',
  },
  viewQuadText: {
  position: 'absolute',
},
button: {
  width: 350, // Adjust the width as per your requirement
  height: 100, // Adjust the height as per your requirement
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#457F9D',
  borderRadius: 8,
  marginBottom: 10,
},
blackBackButton: {
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 10,

},
blackBackButtonText: {
  color: 'black',
  fontSize: 30, // You can adjust the font size if needed
  fontWeight: 'bold', // You can adjust the font weight if needed
},
buttonText: {
  fontSize: 35,
  fontWeight: 'bold',
  color: 'white',
},
btcont:{
  flex: 1,
  flexDirection: "column-reverse",
  paddingBottom: 10,
},
smallSecondaryButton: {
  width: 150,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#457F9D',
  borderRadius: 40,
  marginBottom: 10,
},
buttonContainer: {
  marginTop: 80,
  marginBottom: 10,
},
smallButtonText: {
  fontSize: 25,
  fontWeight: 'bold',
  color: 'white',
},
});

export default OptionScreen;