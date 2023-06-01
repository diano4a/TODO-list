import React from "react";
import { connect } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id}  
          task={task}  
        />
      ))}
    </div>
  );
};

const mapStateProps = (state) => ({
  tasks: state.tasks,
  taskText: state.taskText,
});

export default connect(mapStateProps)(TaskList);