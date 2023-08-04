import React, { useState } from 'react';
import './TaskForm.css';
const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    name: '',
    state: false,
    expireAt: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
    console.log(task);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(task);
    setTask({ name: '', state: false, expireAt: '' });
  };


  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <label className="task-label">
        Nombre Tarea:
        <input 
        className="task-input"
        type="text" 
        name="name" 
        value={task.name} 
        onChange={handleChange} 
        required 
        placeholder="Ingrese su tarea aquí"/>
      </label>
      <label className="task-label">
        Fecha vencimiento:
        <input 
        className="task-input" 
        type="date" name="expireAt" 
        value={task.expireAt} 
        onChange={handleChange} 
        required
        />
      </label>
      <button className='add-button'>Add Task</button>
    </form>
  );
};

export default TaskForm;
