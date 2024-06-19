
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo={todo} 
          toggleTodo={() => toggleTodo(index)} 
          deleteTodo={() => deleteTodo(index)} 
          editTodo={(newText) => editTodo(index, newText)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
