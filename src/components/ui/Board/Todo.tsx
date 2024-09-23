import React from 'react';
import RemoveBtn from './RemoveBtn';
import TodoControl from './TodoControl';
import { cn } from '@/lib/utils';
import EditBtn from './EditBtn';
import EditTodo from './EditTodo';

function Todo({
  text,
  uid,
  completed,
  isEditing,
}: {
  text: string;
  uid: string;
  completed: boolean;
  isEditing: boolean;
}) {
  return (
    <li
      className={cn(
        'border-2 rounded-md p-1 sm:p-3 flex justify-between items-center max-w-[600px] my-3',
        `${completed ? 'border-green-500' : isEditing ? 'border-orange-300' : 'border-gray-300'}`,
      )}
    >
      <div className="flex gap-4 items-center">
        <TodoControl uid={uid} completed={completed} />
        {isEditing ? <EditTodo id={uid} /> : <span className={`${completed ? 'line-through' : ''}`}>{text}</span>}
      </div>
      <div className="flex gap-4">
        <EditBtn id={uid} />
        <RemoveBtn id={uid} />
      </div>
    </li>
  );
}

export default React.memo(Todo);
