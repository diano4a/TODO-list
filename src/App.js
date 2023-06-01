import React, {useState} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import UserForm from './components/UserForm/UserForm';
import Tabs from './components/Tabs/Tabs';
import TaskInput from './components/TaskInput/TaskInput';
import './App.css';

const App = ({ username }) => {
  const [page, setPage] = useState(1);

  const handleNextStep = () => {
    setPage(2);
  }
  return (
   <Provider store={store}>
    <div>
      {page === 1 && <UserForm onNextClick={handleNextStep}/>}
      {page === 2 && (
      <div>
        <TaskInput />
        <Tabs />
      </div>
    )}
    </div>
   </Provider>
  );
}

export default App;
