import React from 'react';

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [editMode, setEditMode] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);
  
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editText);
    setEditMode(false);
  };

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
      {editMode ? (
        <div style={{ marginLeft: '8px' }}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            style={{ width: '100%' }}
          />
          <button onClick={handleSave} style={{ marginLeft: '8px' }}>Save</button>
        </div>
      ) : (
        <button onClick={handleEdit} style={{ marginLeft: '8px' }}>Edit</button>
      )}
      <button onClick={handleDelete} style={{ marginLeft: '8px' }}>Delete</button>
    </li>
  );
}

export default TodoItem;