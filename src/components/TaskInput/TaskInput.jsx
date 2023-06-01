import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';

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
    <div>
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Введите задачу"
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default connect(null, { addTask })(TaskInput);
