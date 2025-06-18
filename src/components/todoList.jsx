import { CheckCircle, Edit, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../feature/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center px-4 py-3 rounded-xl shadow-md border ${
            todo.completed ? 'bg-green-100 text-gray-700' : 'bg-white'
          }`}
        >
          <span
            className={`flex-1 cursor-pointer ${
              todo.completed ? 'line-through opacity-60' : ''
            }`}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="text-green-600 hover:text-green-800"
            >
              <CheckCircle size={20} />
            </button>
            <button className="text-blue-500 hover:text-blue-800" onClick={()=> dispatch(editTodo(todo.id))}>
              
              <Edit size={20}/>
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
