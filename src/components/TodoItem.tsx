import React from 'react';
import useTodoStore from '../stores/todoStore';
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const toggleComplete = useTodoStore(state => state.toggleComplete);
  const deleteTodo = useTodoStore(state => state.deleteTodo);

  return (
    <li className="flex justify-between items-center mb-2">
      <span
        onClick={() => toggleComplete(id)}
        className={`cursor-pointer ${completed ? 'line-through' : ''}`}
      >
        {text}
      </span>
      <button
        onClick={() => deleteTodo(id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
