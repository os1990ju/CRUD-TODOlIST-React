import React from 'react';
import { format } from 'date-fns';
import './Task.css';
const Task = ({ task, onToggleTask, deleteTask }) => {
  const { id, name, state, expireAt } = task;
  let activityState = false;
  if(state==="true"){
    activityState=true;
  }else{
    activityState=false;
  }
  const formattedDate = format(new Date(expireAt), 'dd-MM-yyyy');
  return (
    <div className='Card'>
      <div className={`task ${activityState ? 'completed' : 'incompleted'}`} key={id}>
      <h3 
        className={`${activityState}?'taskState':''`}>{`${name} :`}<span>{activityState ? 'Tarea finalizada' : 'Por hacer'}</span></h3>
      <p>Fecha de vencimiento: {formattedDate}</p>
      <button className='button' onClick={() => onToggleTask(task)}>{activityState ? 'Reiniciar' : 'Completar'}</button>
      <button className='button' onClick={() => deleteTask(task.id)}>eliminar</button>
    </div>
    </div>
  );
};

export default Task;
