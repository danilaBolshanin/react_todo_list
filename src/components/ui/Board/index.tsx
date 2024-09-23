import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch } from '@/lib/hooks/redux';
import { setTodosList } from '@/redux/slices/todosSlice';
import Filter from './Filter';

function Board({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storaged = localStorage.getItem('todosList');
    if (storaged) {
      const todos = JSON.parse(storaged);
      dispatch(setTodosList(todos));
    }
  }, []);

  return (
    <section className="my-6">
      <h2 className="font-medium">Список задач</h2>
      <Filter />
      {children}
    </section>
  );
}

export default React.memo(Board);
