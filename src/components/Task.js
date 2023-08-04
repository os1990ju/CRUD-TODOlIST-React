import React from 'react';
import './Task.css';
const Task = ({ task, onToggleTask, deleteTask }) => {
  const { id, name, state, expireAt } = task;

  return (
    <div className={`task ${state ? 'completed' : ''}`} key={id}>
      <h3>{name}</h3>
      <p>Expiration Date: {expireAt}</p>
      <button onClick={() => onToggleTask(task)}>Toggle State</button>
      <button onClick={() => deleteTask(task.id)}>eliminar</button>
    </div>
  );
};

export default Task;
