import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'modal',
  initialState: {
    todos: [],
    modalType: null,
    message: null,
  },
  reducers: {
    addTodo: (state, { payload }) => {
      console.log('addTodo -', payload);
      return ({
        ...state,
        todos: [...state.todos, payload],
      });
    },
    changeTodo: (state, { payload }) => {
      console.log('changeTodo -', payload);
      const newTodo = state.todos.filter((todo) => todo.id !== payload.id);
      return ({
        ...state,
        todos: [...newTodo, payload],
      });
    },
    deleteTodo: (state, { payload }) => {
      console.log('deleteTodo -', payload);
      const newTodo = state.todos.filter((todo) => todo.id !== payload.id);
      return ({
        ...state,
        todos: [...newTodo],
      });
    },
    resetTodo: (state) => ({
      ...state,
      isOpen: [],
    }),
  },
});

export const { actions } = todoSlice;

export default todoSlice.reducer;
