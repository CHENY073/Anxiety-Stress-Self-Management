/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#D6CBCB',
      width: '90%',
      borderRadius: 5,
      paddingHorizontal: 20,
      marginVertical: 10,
    },
    input: {

    },
});

export default CustomInput;
