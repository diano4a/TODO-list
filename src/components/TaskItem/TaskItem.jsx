import React from "react";
import { connect } from "react-redux";
import { markTaskAsCompleted, editTask, deleteTask } from "../../redux/actions";

const TaskItem = ({ task, markTaskAsCompleted, editTask, deleteTask }) => {
  const handleCompleteClick = () => {
    markTaskAsCompleted(task.id);
  };

  const handleEditClick = () => {
    const newTaskText = prompt("Введите новый текст задачи", task.text);
    if (newTaskText !== null) {
      editTask(task.id, newTaskText);
    }
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <span>{task.text}</span>
      <button onClick={handleCompleteClick}>Завершить</button>
      <button onClick={handleEditClick}>Редактировать</button>
      <button onClick={handleDeleteClick}>Удалить</button>
    </div>
  );
};

export default connect(null, { markTaskAsCompleted, editTask, deleteTask })(TaskItem);
