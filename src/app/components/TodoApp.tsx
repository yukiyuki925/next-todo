"use client";

import { useEffect, useState } from "react";
import { getAllTodos, addTodo } from "../utils/supabaseFunctions";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  title: string;
  created_at: string;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    };
    getTodos();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (title === "") return;
    await addTodo(title);
    const todos = await getAllTodos();
    setTodos(todos);
    setTitle("");
  };

  return (
    <div className="text-center mb-2 text-2xl font-medium">
      <h3>supabase Todo App</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="shadow-lg p-1 outline-none rounded-lg"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-300">
          Add
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
