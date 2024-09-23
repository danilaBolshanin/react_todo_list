import React from 'react';
import { Button } from '../button';
import { Trash2 } from 'lucide-react';
import { useAppDispatch } from '@/lib/hooks/redux';
import { removeTodo } from '@/redux/slices/todosSlice';

function RemoveBtn({ id }: { id: string }) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  return (
    <Button onClick={handleDelete} variant="outline" className="bg-transparent border border-gray-300">
      <Trash2 height={18} width={18} />
    </Button>
  );
}

export default React.memo(RemoveBtn);
