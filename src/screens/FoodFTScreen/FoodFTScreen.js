import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import CustomButton from '../../components/CustomButton'
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';

const BreathingScreen = ({ navigation }) => {
  const [what, setWhat] = useState(0);
  const [who, setWho] = useState(0);
  const [where, setWhere] = useState(0);
  const [when, setWhen] = useState(0);
  const [why, setWhy] = useState(0);

  const window = useWindowDimensions();

  const whatData = ['','What do you really want to be?','What do you do intuitively in order to do so little?','What must you stop doing so you can be what you really want to be?','What will you do today so that tomorrow you can do what you cannot do today?','What is the true cost of not changing?','What will it take for you to change?','What situation will you face despite your anxiety?','What is the worst situation that can happen? is it fact or perception?','What strategies can you use right now?','What deep-seated insecurities are hidden behind your anxiety?','What behaviors must you absolutely change?','What does your reaction to this situation really say about you?','What can you do to change the situation?','If this was happening to someone else, what would you recommend?','What have you learned from past experience that can help you now?','What is both important and urgent for me to change?','What will be the hidden benefits if you changed your behavior?','What have you not tried yet that will allow you to continue making progress?','What tools will allow you to build better relationships?','What paralyzes you into inaction despite your convictions to change?','What are the biggest obstacles that are preventing you from acting differently?','What specific environments trigger your habits that lead to anxiety and stress?','What simple changes to your environment can easily result in a positive change in your daily habits?'];
  const whoData = ['','Who are you when you are at your very best?','Who is involved in this situation?','Who will you ask for help when your stress /anxiety levels are high?','Who will you reach out to for support?','Who is creating the stress and or the anxiety you are feeling?','Who can you rely on the most?','Who do you prefer to be around when things get tough?','Who is the person you most want to talk to when you are stressed or anxious?','Who triggered what you are feeling right now?','Who can best challenge your beliefs?','Who must you absolutely avoid when you are stressed','Who best exemplifies what you are feeling right now?','Who are you really trying to be when you are anxious?','Who do you avoid when things are going well?','Who resembles you the most when you feel how you feel right now?'];
  const whereData = ['','Where can you get effective support?','Where will the motivation come from to overcome your triggers?','Where does it say that you need to be perfect?','Where are you overlooking your strengths?','Where can you keep a journal to follow up on your moods?','Where will you be in 12 months if nothing changes?','Where is your motivation most lacking to change?','Where can you be if you stop doing what you are doing?','Where will you be if you stop that one little destructive habit?'];
  const whenData = ['','When will it be fixed?','When will your start changing','When do you use exaggerated words, such as always, never, every time?','When will you finally use strategy in your daily life?'];
  const whyData = ['','Why do you feel this way? Why should you feel any different?','Why do you persist in remaining stuck in your habit loop?','Why does this pattern continue and which lifestyle habit can decrease your anxiety levels?','Why are you feeling this level of stress and anxiety?'];

  const handlePress = () => {
    if(!what) Alert.alert('Please pick a what question');
    else if(!who) Alert.alert('Please pick a who question');
    else if(!where) Alert.alert('Please pick a where question');
    else if(!when) Alert.alert('Please pick a when question');
    else if(!why) Alert.alert('Please pick a why question');
    else navigation.navigate('Intention');
  };

  return (
    <ScrollView>
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>

      <Text style = {styles.title}>
        Food for thought
      </Text>

      <View style = {styles.containter}>
        <Text style = {styles.label}>What</Text>
        <Picker selectedValue={what} onValueChange={(itemValue, itemIndex) => setWhat(itemValue)} style = {styles.picker} numberOfLines={5}>
          {whatData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>

        <Text style = {styles.label}>Who</Text>
        <Picker selectedValue={who} onValueChange={(itemValue, itemIndex) => setWho(itemValue)} style = {styles.picker} numberOfLines={5}>
          {whoData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>
        
        <Text style = {styles.label}>When</Text>
        <Picker selectedValue={when} onValueChange={(itemValue, itemIndex) => setWhen(itemValue)} style = {styles.picker} numberOfLines={5}>
          {whenData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>

        <Text style = {styles.label}>Where</Text>
        <Picker selectedValue={where} onValueChange={(itemValue, itemIndex) => setWhere(itemValue)} style = {styles.picker} numberOfLines={5}>
          {whereData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>

        <Text style = {styles.label}>Why</Text>
        <Picker selectedValue={why} onValueChange={(itemValue, itemIndex) => setWhy(itemValue)} style = {styles.picker} numberOfLines={5}>
          {whyData.map((item, index)=>{
            return (
              <Picker.Item value={index} label = {item} key={index}/>
            );
          })}
        </Picker>
      </View>

      <View style={styles.button}>
        <CustomButton text= "Submit" onPress={() => handlePress()} type="SECONDARY"/>
      </View>
    </SafeAreaView>
    </ScrollView>
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
  containter: {
    width: '80%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
    textAlign: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#736468',
    marginTop: 2,
  },
  picker: {
    backgroundColor: '#D6CBCB',
    color: '#736468',
  },
  button:{
    flex: 1,
    flexDirection: "column-reverse",
    paddingBottom: 10,
  },
});

export default BreathingScreen;
