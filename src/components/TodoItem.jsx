import React from 'react';

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('このTodoを削除しますか？')) {
      onDelete(todo.id);
    }
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#999' : '#000'
      }}>
        {todo.text}
      </span>
      <button onClick={() => onEdit(todo.id, todo.text)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;