import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //get all tasks
    getAllTasks: (state, action) => {
      if (Array.isArray(action.payload.tasks)) {
        state.tasks = action.payload.tasks;
      } else {
        console.error("Invalid payload format for getAllTasks action:", action.payload);
        state.tasks = [];
      }
    },
    //delete task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task._id !== action.payload);
    }
  },
});

export const { getAllTasks, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
