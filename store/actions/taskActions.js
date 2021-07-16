import AsyncStorage from "@react-native-async-storage/async-storage";

import { SET_TASKS } from "../types";
import { STORAGE_KEYS } from "../../constants";
import store from "../";

//Obtener Tareas
export const getTasks = (onSuccess = () => {}, onError = () => {}) => {
  return async (dispatch) => {
    try {
      const tasksRes = await AsyncStorage.getItem(STORAGE_KEYS.tasks);
      const tasks = tasksRes ? JSON.parse(tasksRes) : [];

      dispatch({
        type: SET_TASKS,
        payload: tasks,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

//Crear Tarea
export const createTask = (
  name,
  listId,
  onSuccess = () => {},
  onError = () => {}
) => {
  return async (dispatch) => {
    try {
      const newTask = {
        name,
        listId,
        id: `task-${new Date().getTime()}`,
        completed: false,
      };

      const { tasks } = store.getState().task;

      const tasksCopy = [...tasks];
      tasksCopy.push(newTask);
      await AsyncStorage.getItem(STORAGE_KEYS.tasks, JSON.stringify(tasksCopy));

      dispatch({
        type: SET_TASKS,
        payload: tasksCopy,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};
