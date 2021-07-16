import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import listReducer from "./reducers/listReducers";
import taskReducer from "./reducers/taskReducer";

const rootReducer = combineReducers({
  list: listReducer,
  task: taskReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
