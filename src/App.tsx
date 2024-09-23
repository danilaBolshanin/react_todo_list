import CreateTodoForm from './components/ui/CreateTodoForm';
import Board from './components/ui/Board';
import TodoList from './components/ui/Board/TodoList';

function App() {
  return (
    <main className="p-6">
      <h1 className="mt-4 mb-6 text-[24px] uppercase font-medium">React todo list</h1>
      <CreateTodoForm />
      <Board>
        <TodoList />
      </Board>
    </main>
  );
}

export default App;
