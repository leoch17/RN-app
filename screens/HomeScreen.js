import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import { Colors } from "../constants/index";

import globalStyles from "../styles/global";
import CustomButton from "../components/CustomButton";
import Task from "../components/Task";
import { getTasks } from "../api";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    console.log(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const renderItem = ({ item }) => {
    return <Task text={item.nombre}></Task>;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    loadTasks();
    setRefreshing(false);
  });

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={globalStyles.listContainer}
        data={tasks}
        keyExtractor={(item) => item.id + ""}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={[Colors[1]]}
            onRefresh={onRefresh}
          />
        }
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
