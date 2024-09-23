import { RootState } from './store';

export const todosListSelector = (state: RootState) => state.todos.todosList;
export const filterSelector = (state: RootState) => state.todos.filter;
