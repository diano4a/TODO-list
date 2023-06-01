const initialState = {
  username: '',
  tasks: [],
  completedTasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'MARK_TASK_AS_COMPLETED':
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
      if (taskIndex !== -1) {
        const task = state.tasks[taskIndex];
        const updatedTask = { ...task, completed: true };
        return {
          ...state,
          tasks: [
            ...state.tasks.slice(0, taskIndex),
            ...state.tasks.slice(taskIndex + 1)
          ],
          completedTasks: [...state.completedTasks, updatedTask],
        };
      }
      return state;
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.taskId) {
            return { ...task, text: action.payload.newTask };
          }
          return task;
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default: 
      return state;
  }
};

export default reducer;