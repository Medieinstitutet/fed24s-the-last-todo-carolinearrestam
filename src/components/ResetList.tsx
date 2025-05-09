// src/components/ResetList.tsx
import React from "react";
import { Todo } from "../models/Todo";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const LOCAL_STORAGE_KEY = "todos";

export function ResetList({ setTodos }: Props) {
  const handleReset = () => {
    const resetTodos: Todo[] = [
      { id: 1, text: "Rasta hunden", done: false },
      { id: 2, text: "Plugga React", done: false },
      { id: 3, text: "Träna", done: false },
    ];
    setTodos(resetTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resetTodos));
  };

  return (
    <div className="w-96 text-center mt-8 justify-center">
      <button
        onClick={handleReset}
        className="px-6 py-2 mr-7 bg-red-200 text-red-800 border border-red-400 rounded-xl hover:bg-red-300"
      >
        Rensa listan
      </button>
    </div>
  );
}
