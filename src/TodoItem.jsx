// src/TodoItem.jsx
import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(newText);
    setIsEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={toggleTodo} />
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
