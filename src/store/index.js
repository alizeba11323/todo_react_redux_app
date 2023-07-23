import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../redux/features/todo/TodoSlice";
const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
