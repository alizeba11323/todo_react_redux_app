import React, { useState } from "react";
import { TodoAPI } from "../redux/features/todo/TodoAction";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleClick = () => {
    dispatch(
      TodoAPI.createTodo({
        userId: 1,
        id: todos.length + 1,
        title,
        completed: false,
      })
    );
    setTitle("");
  };
  return (
    <div className="create_todo_container">
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Create Todo"
      />
      <button onClick={handleClick} className="addTodo">
        <FaPlus />
      </button>
    </div>
  );
}

export default CreateTodo;
