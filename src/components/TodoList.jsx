import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import useTodo from '../hooks/useTodo';

function TodoList() {
  const { todos, addTodo, deleteTodo } = useTodo();

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;