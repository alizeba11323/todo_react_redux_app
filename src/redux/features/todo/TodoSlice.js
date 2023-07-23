import { createSlice } from "@reduxjs/toolkit";
import { TodoAPI } from "./TodoAction";
const initialState = {
  todos: [],
  loading: false,
  error: "",
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(TodoAPI.fetchAllTodos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(TodoAPI.fetchAllTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(TodoAPI.fetchAllTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(TodoAPI.createTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(TodoAPI.createTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    });
    builder.addCase(TodoAPI.createTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(TodoAPI.updateTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(TodoAPI.updateTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    });
    builder.addCase(TodoAPI.updateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(TodoAPI.deleteTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(TodoAPI.deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
    builder.addCase(TodoAPI.deleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default TodoSlice.reducer;
