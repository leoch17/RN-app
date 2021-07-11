import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons';

import { Colors } from '../constants';

const CustomButton = ({ onPress, text, round, icon, iconColor, danger, style }) => {
  let btnStyle = {...styles.container, ...style};

  if (round) {
    btnStyle = {...btnStyle, ...styles.round};
  }
  if (danger) {
    btnStyle = {...btnStyle, ...styles.danger};
  }

/*let [fontsLoaded] = useFonts({
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Light': require('../assets/fonts/Ubuntu-Light.ttf'),
  });*/

/*if (!fontsLoaded) {
    return <AppLoading />;
} else {*/
  return (
    <TouchableHighlight onPress={onPress} activeOpacity={0.8} style={round ? styles.round : {}} underlayColor="transparent">
      <View style={styles.container}>
        {icon && <AntDesign name="plus" size={24} color={iconColor} style={styles.icon} />}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
//}
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors[1],
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Light',
    color: '#fff',
  },
  icon: {
    marginRight: 5,
  },
  danger: {
    backgroundColor: Colors.danger,
  },
  round: {
    borderRadius: 30,
  },
});

export default CustomButton;