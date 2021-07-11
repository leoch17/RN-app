import AsyncStorage from "@react-native-async-storage/async-storage";

import { SET_LISTS, SET_ACTIVE_LIST_ID } from '../types';
import { STORAGE_KEYS } from "../../constants";
import store from '../';

// Obtener acciones de listas
export const getLists = (onSuccess = () => {}, onError = () => {}) => {
    return async dispatch => {
        try {
            const listsRes = await AsyncStorage.getItem(STORAGE_KEYS.lists);
            const lists = listsRes ?  JSON.parse(listsRes) : [];

            dispatch({
                type: SET_LISTS,
                payload: lists,
            });
            onSuccess(); 
        } catch (error) {
            console.log(error);
            onError;
        }
    };
};


// Crear acciones de listas
export const createList = (name, onSuccess = () => {}, onError = () => {}) => {
    return async dispatch => {
        try {
            const newList = {
                name,
                id: `list-${new Date().getTime()}`,
            };

            const {lists} = store.getState().lists;

            const listsCopy = [...list];
            listsCopy.push(newList);
            await AsyncStorage.setItem(STORAGE_KEYS.lists, JSON.stringify(listsCopy));

            dispatch({
                type: SET_LISTS,
                payload: listsCopy,
              });
            onSuccess();
        } catch (error) {
            console.log(err);
            onError();
        }
    };
};