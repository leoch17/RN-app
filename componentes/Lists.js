import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
//import {fonts} from '../styles/CustomFonts';

import globalStyles from '../styles/global';

const Lists = () => {
    const { lists } = useSelector(state => state.list);
    console.log(lists); 

    return(
        <View style={styles.container}> 
            {lists.length > 0 ? <FlatList
                keyExtractor={(item) => item.id}
                contentContainerStyle={globalStyles.listContainer}
                data={lists}
                renderItem={({ item }) => <TouchableOpacity style={globalStyles.listItem} onPress={() => itemClickHandler(item)} >
                    <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>}
            /> : <Text style={globalStyles.noData}>Sin listas</Text>}
        </View>    
        );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flex: 1,
    },
    itemText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 16,
    color: '#000',
  },
     
}); 

export default Lists;