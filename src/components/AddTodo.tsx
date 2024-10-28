import React, { useState } from 'react';
import useTodoStore from '../stores/todoStore';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore(state => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="border p-2 rounded-l"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
