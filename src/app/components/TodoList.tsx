import { deleteTodo, getAllTodos } from "../utils/supabaseFunctions";

interface Todo {
  id: number;
  title: string;
  created_at: string;
}

interface Props {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoList = ({ todos, setTodos }: Props) => {
  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    const updatedTodos = await getAllTodos();
    setTodos(updatedTodos);
  };

  return (
    <div>
      <ul className="mx-auto">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between"
          >
            <span className="font-medium">{todo.title}</span>
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              ×
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
