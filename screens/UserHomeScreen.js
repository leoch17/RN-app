import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import { Colors } from "../constants/index";

import globalStyles from "../styles/global";
import CustomButton from "../components/CustomButton";
import Task from "../components/Product";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
//import { getTasks } from "../api/api.tasks";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    console.log(data);
  };

  useEffect(() => {
    setRefreshing(true);
    loadTasks();
    setRefreshing(false);
  }, [isFocused]);

  

  const renderItem = ({ item }) => {
    return <Task text={item.nombre}  onPress={() => {
      navigation.navigate("TaskScreen", {id: item.id, nombre: item.nombre, descripcion: item.descripcion})
    }}></Task>;
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
      <SearchBar></SearchBar>
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
        icon="plus"
        iconColor="#fff"
        onPress={() => navigation.navigate("NewTask")}
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
