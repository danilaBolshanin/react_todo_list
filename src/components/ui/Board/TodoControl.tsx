import React from 'react';
import { Checkbox } from '../checkbox';
import { useAppDispatch } from '@/lib/hooks/redux';
import { setTodoCompleted } from '@/redux/slices/todosSlice';

function TodoControl({ uid, completed }: { uid: string; completed: boolean }) {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(setTodoCompleted(uid));
  };

  return <Checkbox id={uid} checked={completed} onCheckedChange={handleChange} />;
}

export default React.memo(TodoControl);
