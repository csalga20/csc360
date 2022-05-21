import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch}) {
  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? updatedTodo : todo)

    dispatch({type: 'TOGGLE_TODO', updatedTodos})
  }

  return (
    <div>
      {todos.map((p, i) => (
         <Todo  {...p} updateTodo={updateTodo} key={p.id} />
      ))}
    </div>
  );
}