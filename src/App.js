import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  // state Stuff
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all");

  const [filterdTodos, setFilterTodos] = useState([]);

  // Run just one time bei start the webseit 
  useEffect(() => {
    getLocalTodos();
  }, [])
  // USE EFFECT
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  // Funktions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }

  // Sava to Local
  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  };


  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }
  };

  return (
    <div className="App">
      <header>
        ToDo List
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterdTodos={filterdTodos} />
    </div>
  );
}

export default App;
