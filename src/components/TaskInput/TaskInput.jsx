import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';
import './TaskInput.css'

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className='task-input'>
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Введите задачу"
        className="task-input__input"
      />
      <button className='task-input__button' onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default connect(null, { addTask })(TaskInput);
