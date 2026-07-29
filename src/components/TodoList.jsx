import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import useTodo from '../hooks/useTodo';

function TodoList() {
  const { todos, addTodo, deleteTodo, toggleTodo, updateTodoText } = useTodo();
  const [filter, setFilter] = React.useState('all'); // 新增: フィルタ状態

  // フィルタ処理
  const filteredTodos = filter === 'all' ? todos :
    filter === 'completed' ? todos.filter(todo => todo.completed) :
    todos.filter(todo => !todo.completed);

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onEdit={updateTodoText}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;