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
      const completedTask = state.tasks.find(task => task.id === action.payload);
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: true };
        }
        return task;
      });
      return { 
        ...state,
        tasks: updatedTasks,
        completedTasks: [...state.completedTasks, completedTask],
      };
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