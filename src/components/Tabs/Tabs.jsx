import React, { useState } from "react";
import { connect } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import './Tabs.css';

const Tabs = ({ activeTasks, completedTasks }) => {
  const [activeTab, setActiveTab] = useState('active');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button 
          className={activeTab === 'active' ? 'active' : ''} 
          onClick={() => handleTabChange('active')}>Активные
        </button>
        <button 
          className={activeTab === 'completed' ? 'active' : ''}
          onClick={() => handleTabChange('completed')}>Выполненные
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'active' ? (
          <div>
            {/* <h2>Активные задачи</h2> */}
            {activeTasks.map((task) => (
              !task.completed &&  <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div>
            {/* <h2>Выполненные задачи</h2> */}
            {completedTasks.map((task) => (
              task.completed &&  <TaskItem key={task.id} task={task} />
            ))}
          </div>
        )}
        </div>
    </div>
  );
};

const mapStateProps = (state) => ({
  activeTasks: state.tasks,
  completedTasks: state.completedTasks,
});

export default connect(mapStateProps)(Tabs);