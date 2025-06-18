// import { CheckCircle, Edit, Trash2 } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo, editTodo, toggleTodo } from "../feature/todoSlice";

// export default function TodoList() {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   return (
//     <ul className="space-y-3">
//       {todos.map((todo) => (
//         <li
//           key={todo.id}
//           className={`flex justify-between items-center px-4 py-3 rounded-xl shadow-md border ${
//             todo.completed ? 'bg-green-100 text-gray-700' : 'bg-white'
//           }`}
//         >
//           <span
//             className={`flex-1 cursor-pointer ${
//               todo.completed ? 'line-through opacity-60' : ''
//             }`}
//             onClick={() => dispatch(toggleTodo(todo.id))}
//           >
//             {todo.text}
//           </span>
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => dispatch(toggleTodo(todo.id))}
//               className="text-green-600 hover:text-green-800"
//             >
//               <CheckCircle size={20} />
//             </button>
          
//             <button
//               onClick={() => dispatch(deleteTodo(todo.id))}
//               className="text-red-600 hover:text-red-800"
//             >
//               <Trash2 size={20} />
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }
import { CheckCircle, Edit, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../feature/todoSlice";
import { useState } from "react";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = () => {
    if (editText.trim() !== "") {
      dispatch(editTodo({ id: editId, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center px-4 py-3 rounded-xl shadow-md border ${
            todo.completed ? 'bg-green-100 text-gray-700' : 'bg-white'
          }`}
        >
          {editId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 mr-4 px-2 py-1 border rounded focus:outline-none"
            />
          ) : (
            <span
              className={`flex-1 cursor-pointer ${
                todo.completed ? 'line-through opacity-60' : ''
              }`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="text-green-600 hover:text-green-800"
            >
              <CheckCircle size={20} />
            </button>

            {editId === todo.id ? (
              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
              >
                Update
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(todo)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit size={20} />
              </button>
            )}

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
