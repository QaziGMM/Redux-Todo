import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";


export default function todoInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Add a task..."
        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={ ()=> handleSubmit}
        type="submit"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition duration-300"
      >
        Add
      </button>
    </form>
  );
}
