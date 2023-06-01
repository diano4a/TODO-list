import React, { useState } from "react";
import { connect } from "react-redux";
import TaskList from "../TaskList/TaskList";
import TaskItem from "../TaskItem/TaskItem";

const Tabs = ({ activeTasks, completedTasks }) => {
  const [activeTab, setActiveTab] = useState('active');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange('active')}>Активные</button>
        <button onClick={() => handleTabChange('completed')}>Выполненные</button>
      </div>
        {
        activeTab === 'active' ? (
          <div>
            <h2>Активные задачи</h2>
            {activeTasks.map((task) => (
              !task.completed &&  <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div>
            <h2>Выполненные задачи</h2>
            {completedTasks.map((task) => (
              task.completed &&  <TaskItem key={task.id} task={task} />
            ))}
          </div>
        )}
    </div>
  );
};

const mapStateProps = (state) => ({
  activeTasks: state.tasks,
  completedTasks: state.completedTasks,
});

export default connect(mapStateProps)(Tabs);