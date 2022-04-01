/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, useWindowDimensions} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

const Slider = ({value, setValue}) => {
  const window = useWindowDimensions();
  const size = window.width-40;
  
  const handle1 = () => {
    setValue(1);
  };
  const handle2 = () => {
    setValue(2);
  };
  const handle3 = () => {
    setValue(3);
  };
  const handle4 = () => {
    setValue(4);
  };
  const handle5 = () => {
    setValue(5);
  };

  return (
    <View style={styles.container} width={window.width} height={window.height}>
      <Svg height={size/2} width={size}>
        <G scale={size/100} y="20" origin="0, -20">
          <G onPress={handle1} rotation="0" origin="50, 30">
            <Path fill="#F07575" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
          </G>
          <G onPress={handle2} rotation="36" origin="50, 30">
            <Path fill="#F0B275" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
          </G>
          <G onPress={handle3} rotation="72" origin="50, 30">
            <Path fill="#F0F075" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
          </G>
          <G onPress={handle4} rotation="108" origin="50, 30">
            <Path fill="#B2F075" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
          </G>
          <G onPress={handle5} rotation="144" origin="50, 30">
            <Path fill="#75F075" d="m25,30h-25c0,-11,3.5,-21.2,9.5,-29.4l20.3,14.7c-3,4.1,-4.8,9.2,-4.8,14.7z"/>
          </G>
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor :'#EDE9E9',
  }
})

export default Slider;