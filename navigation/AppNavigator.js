import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet, Alert, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import HomeScreen from '../screens/HomeScreen';
import AddListScreen from '../screens/AddListScreen';
import { Colors } from '../constants';

const TasksStackNavigator = createStackNavigator();


const defautlStyles = {
    headerStyle: {
        backgroundColor: Colors[1],
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'Ubuntu-Medium',
    },

};

const TaskNavigator = () => {
    
    return (
        <TasksStackNavigator.Navigator>
            <TasksStackNavigator.Screen 
                name="Home"
                component={HomeScreen}
                options={{...defautlStyles, title: 'Tus listas', headerTitleAlign: 'center' }}
            />
            <TasksStackNavigator.Screen 
                name="NewList"
                component={AddListScreen}
                options={{...defautlStyles, title: 'Agregar nueva lista' }}
            />
        </TasksStackNavigator.Navigator>
    )
}

const AppNavigator = () => {

    let [fontsLoaded] = useFonts({
        'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Light': require('../assets/fonts/Ubuntu-Light.ttf'),
    });
    

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return(
        <NavigationContainer>
            <TaskNavigator />
        </NavigationContainer>
    );
    }
}

export default AppNavigator;