
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', text: 'Learn React', completed: true },
  { id: '2', text: 'Learn Redux', completed: false },
  { id: '3', text: 'Build something awesome!', completed: false }
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false
          }
        };
      }
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo(state, action) {
      const { id, newText } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Selectors
export const selectAllTodos = state => state.todos;
export const selectCompletedTodos = state => 
  state.todos.filter(todo => todo.completed);
export const selectActiveTodos = state => 
  state.todos.filter(todo => !todo.completed);