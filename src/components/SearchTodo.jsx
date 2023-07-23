import React from "react";

function SearchTodo({ searchTitle, setSearchTitle }) {
  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };
  return (
    <div className="search_app">
      <input
        type="text"
        placeholder="Search Todo"
        name="search_title"
        value={searchTitle}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchTodo;
