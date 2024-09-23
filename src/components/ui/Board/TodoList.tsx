import { useAppSelector } from '@/lib/hooks/redux';
import React from 'react';
import { Todo as TodoType } from '../../../lib/types';
import Todo from './Todo';
import { filterSelector, todosListSelector } from '@/redux/selectors';

function TodoList() {
  const todos = useAppSelector(todosListSelector);
  const filter = useAppSelector(filterSelector);

  const filteredTodos = todos.filter((item) =>
    filter === 'all'
      ? item
      : filter === 'in_progress'
        ? !item.completed
        : filter === 'completed'
          ? item.completed
          : item,
  );

  return (
    <>
      {filteredTodos.length > 0 ? (
        <ul>
          {filteredTodos.map((item: TodoType) => {
            return (
              <Todo
                key={item.uid}
                text={item.text}
                uid={item.uid}
                completed={item.completed}
                isEditing={item.isEditing}
              />
            );
          })}
        </ul>
      ) : (
        <div>Задач пока нет...</div>
      )}
    </>
  );
}

export default React.memo(TodoList);
