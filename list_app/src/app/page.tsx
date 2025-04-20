'use client';

import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">To-Do List App</h1>
      
      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 rounded shadow"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleComplete(todo.id)}
            className={`cursor-pointer p-2 border rounded ${
              todo.completed ? 'line-through text-gray-500' : 'text-black'
            }`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </main>
  );
}

