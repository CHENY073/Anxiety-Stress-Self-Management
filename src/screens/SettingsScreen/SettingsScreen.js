import React, {useState} from 'react';
import {View, Text, Switch, Image, StyleSheet, useWindowDimensions, ImageBackground, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SettingsScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
        
        
        
        
    <View style={styles.root}>
    
    
      
        <CustomButton text= "<" onPress={() => navigation.navigate('Menu Screen')} type="whiteBackButton"/>
        <Text style={styles.title}>
        Settings
      </Text>
        
    
    <View style={styles.top} />

        <Text style={styles.options}>
            {"\n"}{"\n"}
            NAME
           
        </Text>

        <View style={styles.container}>
            <Text> Push Notifications</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "blue" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}

      />
      
    </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  
    backgroundColor :'#736467',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  
 
  title: {
    fontSize: 28,
    
    
    color: 'white',
    marginVertical: -35,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  options: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'flex-end',
      marginHorizontal: 30,
      marginVertical: 5,
      
      
  },
  
});

export default SettingsScreen;