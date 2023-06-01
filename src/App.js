import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

import UserForm from './components/UserForm/UserForm';
import Tabs from './components/Tabs/Tabs';
import TaskInput from './components/TaskInput/TaskInput';
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);
  const username = useSelector(state => state.username);
  const activeTasks = useSelector(state => state.tasks);

  const handleNextStep = () => {
    setPage(2);
  };

  return (
    <Provider store={store}>
      <div className='app'>
        {page === 1 && <UserForm onNextClick={handleNextStep} />}
        {page === 2 && (
          <div className='content'>
            <h1 className='title'>{username}</h1>
            <h2 className='task-count'>Количество активных задач: {activeTasks.length}</h2>
            <TaskInput />
            <Tabs />
          </div>
        )}
      </div>
    </Provider>
  );
};

export default App;
