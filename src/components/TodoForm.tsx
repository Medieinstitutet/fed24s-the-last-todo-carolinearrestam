import { ChangeEvent, FormEvent, useState } from "react";
import { ErrorMessage } from "../models/ErrorMessage";
import "./TodoApp.css";

type Props = {
  onAdd: (text: string) => void;
};

export function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<ErrorMessage[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      onAdd(text);
      setText("");
    }
  };

  const validate = () => {
    let temp: ErrorMessage[] = [];

    if (text === "") {
      temp.push({
        name: "text",
        error: "Kan ej lägga till en tom aktivitet",
        type: "empty",
      });
    }

    setErrors(temp);
    return temp.length === 0;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-row items-start gap-4 w-full"
    >
      <div className="flex flex-col w-full">

        <input
          type="text"
          id="text"
          placeholder="Lägg till.."
          value={text}
          onChange={handleChange}
          onBlur={validate}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 w-full inset-shadow-sm"
        />

        {errors
          .filter((e) => e.name === "text")
          .map((e, i) => (
            <p key={i} className="text-red-500 text-sm mt-1">
              {e.error}
            </p>
          ))}
      </div>
        <button className=" bg-white text-black px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-600 whitespace-nowrap">
        Lägg till
        </button>

    </form>
  );
}