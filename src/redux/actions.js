export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const addTask = (taskText) => ({
  type: 'ADD_TASK',
  payload: {
    id: Date.now(),
    text: taskText,
    completed: false,
  },
});

export const markTaskAsCompleted = (taskId) => ({
  type: 'MARK_TASK_AS_COMPLETED',
  payload: taskId,
})

export const editTask = (taskId, newTask) => ({
  type: 'EDIT_TASK',
  payload: { taskId, newTask },
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId,
});