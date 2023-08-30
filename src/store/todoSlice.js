import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: v4(),
        title: action.payload.title,
        img: action.payload.img,
        text: action.payload.text,
        date: Date(),
      });
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((item) => item.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
    delTodo: (state, action) => state.filter((todo) => todo.id !== action.payload),
  },
});

export const todoListAction = todoListSlice.actions;
export default todoListSlice;
