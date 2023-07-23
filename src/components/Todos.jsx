import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoAPI } from "../redux/features/todo/TodoAction";
import Todo from "./Todo";

function Todos({ searchTitle }) {
  const [msg, setMsg] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  const todos = useSelector((state) => state.todo);
  const searchTodo =
    searchTitle !== ""
      ? todos?.todos.filter((todo) =>
          todo.title.toLowerCase().includes(searchTitle.toLowerCase())
        )
      : todos.todos;
  const viewTodo =
    filterValue === "All"
      ? searchTodo
      : filterValue === "Completed"
      ? searchTodo.filter((todo) => todo.completed)
      : searchTodo.filter((todo) => !todo.completed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TodoAPI.fetchAllTodos());
  }, [dispatch]);
  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
  }, [msg]);
  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };
  return (
    <div className="todos">
      {msg && <p className="alert">{msg}</p>}
      {todos.loading && <p className="load">Loading.....</p>}
      <div className="filters">
        <label htmlFor="filter_checked_compeleted">
          <input
            type="radio"
            name="filter_check_complete"
            value={"All"}
            checked={filterValue === "All"}
            onChange={handleChange}
          />
          All
        </label>
        <label htmlFor="filter_checked_compeleted">
          <input
            type="radio"
            name="filter_check_complete"
            value="Completed"
            checked={filterValue === "Completed"}
            onChange={handleChange}
          />
          Completed
        </label>
        <label htmlFor="filter_checked_compeleted">
          <input
            type="radio"
            name="filter_check_complete"
            value="Not_Completed"
            checked={filterValue === "Not_Completed"}
            onChange={handleChange}
          />
          Not Completed
        </label>
      </div>
      {viewTodo && (
        <>
          {viewTodo.map((todo) => (
            <Todo key={todo.title} todo={todo} setMsg={setMsg} />
          ))}
        </>
      )}
    </div>
  );
}

export default Todos;
