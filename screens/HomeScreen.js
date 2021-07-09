import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return(
        <View>
            <Text>Dashboard</Text>
            <Button title="Agregar nueva lista" onPress={() => navigation.navigate('NewList')} />
        </View>
    );
};

export default HomeScreen;

