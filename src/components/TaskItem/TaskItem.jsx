import React from "react";
import { connect } from "react-redux";
import { markTaskAsCompleted, editTask, deleteTask } from "../../redux/actions";
import editIcon from "../../icons/edit-icon.png";
import deleteIcon from "../../icons/delete-icon.png";
import "./TaskItem.css";

const TaskItem = ({ task, markTaskAsCompleted, editTask, deleteTask }) => {

  const handleEditClick = () => {
    const newTaskText = prompt("Введите новый текст задачи", task.text);
    if (newTaskText !== null) {
      editTask(task.id, newTaskText);
    }
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  const handleTaskClick = () => {
    if (!task.completed) {
      markTaskAsCompleted(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={handleTaskClick}>{task.text}</span>
      <div className="button-container">
        <button className="icon-button" onClick={handleEditClick}>
          <img src={editIcon} alt="Редактировать" />
        </button>
        <button className="icon-button" onClick={handleDeleteClick}>
          <img src={deleteIcon} alt="Удалить" />
        </button>
      </div>
    </div>
  );
};

export default connect(null, { markTaskAsCompleted, editTask, deleteTask })(TaskItem);
