import { useState } from "react";
import { Todo } from "../models/Todo";
import { TodoForm } from "./TodoForm";
import "./TodoApp.css";
import { ResetList } from "./ResetList";

const LOCAL_STORAGE_KEY = "my-todo-list";

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "Rasta hunden", done: false },
      { id: 2, text: "Plugga React", done: false },
      { id: 3, text: "Träna", done: false },
    ];
  });

  const [sortList, setSortList] = useState(false);

  const saveTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    saveTodos([...todos, newTodo]);
  };

  const toggleDone = (id: number) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    saveTodos(updated);
  };

  const activeTodos = todos
    .filter((t) => !t.done)
    .sort((a, b) => (sortList ? a.text.localeCompare(b.text) : 0));

  const completedTodos = todos
    .filter((t) => t.done)
    .sort((a, b) => (sortList ? a.text.localeCompare(b.text) : 0));

  return (
    <div className="w-96 p-6 bg-gray-50 rounded-xl shadow-xl/30">
      <h2 className="text-2xl font-bold mb-4 text-center">Att göra lista:</h2>

      <TodoForm onAdd={addTodo} />

      <div className="text-center mt-4">
        <p>Klicka för att sortera på:</p>
        <button
          onClick={() => setSortList(!sortList)}
          className="bg-sky-100 text-black px-4 py-2 border border-gray-400 rounded-xl cursor-pointer mb-12 hover:border-blue-600 whitespace-nowrap"
        >
        {sortList ? "A-Ö" : "Senast tillagd"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Aktiva</h3>
          <ul className="space-y-2">
            {activeTodos.map((todo) => (
              <li
                key={todo.id}
                className="todo-item flex items-center gap-2 p-2 border border-gray-400 rounded-xl bg-sky-100"
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(todo.id)}
                />
                <span>{todo.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Avklarade</h3>
          <ul className="space-y-2">
            {completedTodos.map((todo) => (
              <li
                key={todo.id}
                className="todo-item flex items-center gap-2 p-2 border border-gray-400 rounded-xl text-gray-500 bg-sky-100"
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(todo.id)}
                />
                <s>{todo.text}</s>
              </li>
            ))}
          </ul>
        </div>
        <ResetList setTodos={setTodos} />

      </div>
    </div>
  );
}
