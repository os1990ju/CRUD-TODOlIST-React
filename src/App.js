import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'
import Icono from './components/icono';
const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8090/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await fetch('http://localhost:8090/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      console.log(data.Task);
      setTasks([...tasks, data.Task]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTaskState = async (task) => {
    try {
      let updatedTask;
      console.log(task);
      if(task.state === "true"){
        updatedTask = { ...task, state: "false"};
      }else{
        updatedTask = { ...task, state: "true"};
      }
      
      console.log(updatedTask);
      const response = await fetch(`http://localhost:8090/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await response.json();
      setTasks(tasks.map(t => t.id === task.id ? data.Task : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:8090/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  

  return (
    <div className="app">
      <div className="container">
        <h1>Administrador de Tareas <span><Icono/></span></h1>
        <TaskForm onSubmit={addTask} />
        <TaskList tasks={tasks} onToggleTask={toggleTaskState} deleteTask={deleteTask}/>
      </div>
    </div>
  );
};

export default App;
