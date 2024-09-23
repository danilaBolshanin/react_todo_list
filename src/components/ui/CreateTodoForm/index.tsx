import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '../button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../form';
import { Input } from '../input';
import { TODO_MAX_MESSAGE, TODO_MIN_MESSAGE } from '@/lib/constants';
import { useAppDispatch } from '@/lib/hooks/redux';
import { createTodo } from '@/redux/slices/todosSlice';

const formSchema = z.object({
  todo: z.string().min(2, { message: TODO_MIN_MESSAGE }).max(50, { message: TODO_MAX_MESSAGE }),
});

export default function CreateTodoForm() {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(createTodo(values.todo));
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
                <Input placeholder="Текст задачи..." {...field} className="sm:w-[400px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Создать</Button>
      </form>
    </Form>
  );
}
