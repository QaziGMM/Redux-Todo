// src/App.jsx
import React from 'react';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
export default function App() {
  return (
   
    <div className="min-h-screen  bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-fade-in">
          Redux Todo App 🚀
        </h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
    
  );
}
