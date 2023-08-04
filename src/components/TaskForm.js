import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskForm.css';
import DatePicker from 'react-datepicker';
const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    name: '',
    state: false,
    expireAt: null
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
        <DatePicker
          className="task-input"
          name="expireAt"
          selected={task.expireAt} // Utilizar selected en lugar de value para el DatePicker
          onChange={(date) => setTask((prevTask) => ({ ...prevTask, expireAt: date }))}
          required
          dateFormat="dd/MM/yyyy" // Establecer el formato de fecha deseado
          placeholderText="Seleccione fecha" // Establecer el placeholder personalizado para el DatePicker
        />
      </label>
      {/* <label className="task-label">
        Fecha vencimiento:
        <input 
        className="task-input" 
        type="date" name="expireAt" 
        value={task.expireAt} 
        onChange={handleChange} 
        required
        />
      </label> */}
      <button className='add-button'>Add Task</button>
    </form>
  );
};

export default TaskForm;
