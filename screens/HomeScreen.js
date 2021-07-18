import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { Colors } from "../constants/index";

import globalStyles from "../styles/global";
import CustomButton from "../components/CustomButton";
import Task from "../components/Task";
import { getTasks } from "../api";


const HomeScreen = ({ navigation }) => {
  
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    console.log(data);
  }

  useEffect(() => {
    setLoading(true);
    loadTasks();
    setLoading(false);
  }, [])

  if (loading) {
    return (
      <ActivityIndicator
        color={Colors[1]}
        size="large"
        style={globalStyles.loader}
      />
    );
  }

  const renderItem = ({item}) => {
    return <Task text={item.nombre}></Task>;
  };


  return (
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={globalStyles.listContainer}
        data={tasks}
        keyExtractor={(item) => item.id + ''}
        renderItem={renderItem}
      />
      <CustomButton
        text="Agregar nueva tarea"
        icon="add"
        iconColor="#fff"
        onPress={() => navigation.navigate("NewList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
