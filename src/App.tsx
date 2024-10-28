import React from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import useTodoStore  from './stores/todoStore';

const App: React.FC = () => {
  const todos = useTodoStore(state => state.todos);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTodo />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;



