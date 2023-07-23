import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Fetch_ALL_TODOS = createAsyncThunk(
  "todo/getAllTodos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8000/todos");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const Fetch_SINGLE_TODOS = createAsyncThunk(
  "todo/getSingleTodos",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8000/todos/" + id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const CREATE_TODO = createAsyncThunk(
  "todo/createTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8000/todos", todo);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const UPDATE_TODO = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, todo }, { rejectWithValue }) => {
    try {
      const res = await axios.put("http://localhost:8000/todos/" + id, todo);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const DELETE_TODO = createAsyncThunk(
  "todo/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete("http://localhost:8000/todos/" + id);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const TodoAPI = {
  createTodo: CREATE_TODO,
  fetchAllTodos: Fetch_ALL_TODOS,
  fetchSingleTodo: Fetch_SINGLE_TODOS,
  updateTodo: UPDATE_TODO,
  deleteTodo: DELETE_TODO,
};
