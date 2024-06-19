// src/App.jsx
import { useState } from 'react';
import './index.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.done;
    if (filter === 'incomplete') return !todo.done;
    return true;
  });

  return (
    <div className="App">
    <div className='Box'>
      <h1>Todo List</h1>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      <input type="text" id="new-todo" placeholder="Enter a new task" />
      <button onClick={() => addTodo({
        text: document.getElementById('new-todo').value,
        done: false
      })}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
