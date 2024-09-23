import React from 'react';
import { Button } from '../button';
import { Pencil } from 'lucide-react';
import { useAppDispatch } from '@/lib/hooks/redux';
import { setEditing } from '@/redux/slices/todosSlice';

function EditBtn({ id }: { id: string }) {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(setEditing(id));
  };

  return (
    <Button onClick={handleEdit} variant="outline" className="bg-transparent border border-gray-300">
      <Pencil height={18} width={18} />
    </Button>
  );
}

export default React.memo(EditBtn);
