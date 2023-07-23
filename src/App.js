import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import SearchTodo from "./components/SearchTodo";
import Todos from "./components/Todos";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <div className="App">
      <SearchTodo searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <CreateTodo />
      <Todos searchTitle={searchTitle} />
    </div>
  );
}

export default App;
