import React from 'react';
import Task from './Task';
import './TaskList.css'
const TaskList = ({ tasks, onToggleTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task =>(
        <Task key={task.id} task={task} onToggleTask={onToggleTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
