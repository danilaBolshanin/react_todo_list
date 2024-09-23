import { TodosInitState } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState: TodosInitState = {
  todosList: [],
  filter: 'all',
};
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodosList(state, action) {
      state.todosList = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    createTodo(state, action) {
      const newTodo = {
        text: action.payload,
        completed: false,
        uid: uuidv4(),
        isEditing: false,
      };
      state.todosList.push(newTodo);

      localStorage.setItem('todosList', JSON.stringify(state.todosList));
    },
    removeTodo(state, action) {
      const candidateIndex = state.todosList.findIndex((item) => item.uid === action.payload);
      if (candidateIndex !== -1) {
        state.todosList.splice(candidateIndex, 1);
      }

      localStorage.setItem('todosList', JSON.stringify(state.todosList));
    },
    setTodoCompleted(state, action) {
      state.todosList = state.todosList.map((item) =>
        item.uid === action.payload ? { ...item, completed: !item.completed } : item,
      );

      localStorage.setItem('todosList', JSON.stringify(state.todosList));
    },
    setEditing(state, action) {
      state.todosList = state.todosList.map((item) =>
        item.uid === action.payload ? { ...item, isEditing: !item.isEditing } : item,
      );
      localStorage.setItem('todosList', JSON.stringify(state.todosList));
    },
    editTodo(state, action) {
      state.todosList = state.todosList.map((item) =>
        item.uid === action.payload.id ? { ...item, text: action.payload.text } : item,
      );

      localStorage.setItem('todosList', JSON.stringify(state.todosList));
    },
  },
});

const { actions, reducer } = todosSlice;

export const { createTodo, removeTodo, setTodoCompleted, setTodosList, setEditing, editTodo, setFilter } = actions;
export default reducer;
