import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Load todos from local storage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever the todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, status: "pending" }]);
      setNewTodo("");
    }
  };

  const toggleStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status =
      updatedTodos[index].status === "pending" ? "done" : "pending";
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const filteredTodos = filter === "all"
    ? todos
    : todos.filter((todo) => todo.status === filter);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        <label>Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.status === "done" ? "line-through" : "none" }}
              onClick={() => toggleStatus(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
