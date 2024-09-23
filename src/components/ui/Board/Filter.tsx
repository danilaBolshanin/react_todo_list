import React, { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';
import { useAppDispatch } from '@/lib/hooks/redux';
import { setFilter } from '@/redux/slices/todosSlice';

function Filter() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('all');

  useEffect(() => {
    dispatch(setFilter(value));
  }, [value]);

  return (
    <div className="w-[250px] space-y-6 my-6">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Все задачи" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Все задачи</SelectItem>
          <SelectItem value="completed">Выполненные</SelectItem>
          <SelectItem value="in_progress">В работе</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default React.memo(Filter);
