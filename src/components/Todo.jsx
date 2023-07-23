import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoAPI } from "../redux/features/todo/TodoAction";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
function Todo({ todo, setMsg }) {
  const [completed, setCompleted] = useState(todo.completed);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const handleEdit = () => {
    setEdit((prev) => !prev);
    setTitle(todo.title);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleUpdate = () => {
    dispatch(
      TodoAPI.updateTodo({ id: todo.id, todo: { ...todo, title } })
    ).then((obj) => {
      console.log(obj);
      setMsg("Update Todo Successfully");
      setEdit((prev) => !prev);
      setTitle("");
    });
  };
  const handleDelete = () => {
    dispatch(TodoAPI.deleteTodo(todo.id)).then((obj) => {
      console.log(obj);
      setMsg("Delete Todo Successfully");
    });
  };
  const handleTodoCompleted = (e) => {
    setCompleted((prev) => !prev);
    dispatch(
      TodoAPI.updateTodo({
        id: todo.id,
        todo: { ...todo, completed: e.target.checked },
      })
    ).then((obj) => {
      console.log(obj);
      setMsg("Update Completed Successfully");
    });
  };
  return (
    <div className="todo">
      {edit ? (
        <>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <div>
            <button onClick={handleUpdate} className="actions">
              <FaCheck />
            </button>
            <button onClick={handleEdit} className="actions">
              <MdClose />
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              name="check_completed"
              value="Completed"
              onChange={handleTodoCompleted}
              checked={completed}
            />
            {todo.title}{" "}
          </div>
          <div>
            <button onClick={handleEdit} className="actions">
              <FaEdit />
            </button>
            <button onClick={handleDelete} className="actions">
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
