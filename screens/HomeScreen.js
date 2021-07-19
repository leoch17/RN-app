import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../constants/index";

import globalStyles from "../styles/global";
import CustomButton from "../components/CustomButton";
import Task from "../components/Task";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { getTasks } from "../api/api.tasks";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigat = useNavigation();

  const isFocused = useIsFocused();

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    console.log(data);
  };

  useEffect(() => {
    loadTasks();
  }, [isFocused]);

  const renderItem = ({ item }) => {
    return <Task text={item.nombre}></Task>;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    loadTasks();
    setRefreshing(false);
  })

  const handleSearch = () => {

  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Update")}>
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
      </TouchableOpacity>
      <CustomButton
        text="Agregar nueva tarea"
        icon="plus"
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
