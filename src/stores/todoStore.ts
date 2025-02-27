import {create} from 'zustand';

interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text }],
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id),
  })),
}));

export default useTodoStore; // Make sure this line is present and correctly exporting the store
