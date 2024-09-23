import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../form';
import { Input } from '../input';
import { TODO_MAX_MESSAGE, TODO_MIN_MESSAGE } from '@/lib/constants';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { editTodo, setEditing } from '@/redux/slices/todosSlice';

const formSchema = z.object({
  todo: z.string().min(2, { message: TODO_MIN_MESSAGE }).max(50, { message: TODO_MAX_MESSAGE }),
});

function EditTodo({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const currentTodo = useAppSelector((state) => {
    const initialData = state.todos.todosList;
    const currTodo = initialData.find((todo) => todo.uid === id);
    return currTodo?.text ?? '';
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: currentTodo,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(editTodo({ text: values.todo, id }));
    dispatch(setEditing(id));
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-6">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} className="min-w-[300px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default React.memo(EditTodo);
