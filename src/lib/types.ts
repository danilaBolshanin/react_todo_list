export interface Todo {
  text: string;
  completed: boolean;
  uid: string;
  isEditing: boolean;
}

export interface TodosInitState {
  todosList: Array<Todo>;
  filter: string;
}
