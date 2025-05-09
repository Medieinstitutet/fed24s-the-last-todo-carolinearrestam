import { ChangeEvent, FormEvent, useState } from "react";
import { ErrorMessageModel } from "../models/ErrorMessageModel";
import "./TodoApp.css";
import { ErrorMessage } from "./ErrorMessage";


type Props = {
  onAdd: (text: string) => void;
};

export function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<ErrorMessageModel[]>([]);

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
    let temp: ErrorMessageModel[] = [];

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
          placeholder="Ny aktivitet.."
          value={text}
          onChange={handleChange}
          className="bg-white border border-gray-400 rounded-xl px-3 py-2 w-full inset-shadow-sm"
        />

        {errors
          .map((e, i) => (
            <ErrorMessage key={i} message={e.error} />
          ))}

      </div>
        <button className=" bg-sky-100 text-black px-4 py-2 border border-gray-400 rounded-xl cursor-pointer hover:border-blue-600 whitespace-nowrap">
        Lägg till
        </button>

    </form>
  );
}