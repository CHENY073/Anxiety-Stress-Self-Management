/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const CustomSelect = ({data, onSelect, radio = false, type = 'PRIMARY'}) => {

  const [userOption, setUserOption] = radio? useState(null): useState([]);

  const colors = {'PRIMARY':'#6D828F', 'SECONDARY':'#457F9D'};

  const handleSelect = (value) => {
    if(radio) setUserOption(value);
    else{
      if(userOption.includes(value))
        setUserOption(userOption.filter((item) => item !== value));
      else
        setUserOption([... userOption, value]);
    }
  };

  useEffect(() => {onSelect(userOption)}, [userOption]);

  const unselected = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: colors[type],
    borderColor: colors[type],
  };

  const selected = {
    backgroundColor: colors[type],
    color: '#FFF',
    borderColor: colors[type],
  };

  const getStyle = (item, baseStyle) => {
    if(radio)
      return item === userOption? [baseStyle, selected] : [baseStyle, unselected];
    else
      return userOption.includes(item)? [baseStyle, selected] : [baseStyle, unselected];
  };

  return (
    <View style={styles.container}>
      {data.map((item, index)=>{
        return (
          <Pressable onPress={() => handleSelect(item)} style={getStyle(item, styles[`button_${type}`])} key={index}>
            <Text style={getStyle(item, styles[`text_${type}`])}>{item}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button_PRIMARY: {
    minWidth: 100,
    height: 50,
    margin: 10,
    paddingHorizontal: 5,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_PRIMARY: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button_SECONDARY: {
    minWidth: 50,
    height: 50,
    margin: 10,
    paddingHorizontal: 5,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_SECONDARY: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default CustomSelect;
