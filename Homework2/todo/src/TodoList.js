import React from "react";
import Todo from "./Todo";
import { useResource } from "react-request-hook";

export default function TodoList({ todos = [], dispatch}) {
  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? updatedTodo : todo)

    dispatch({type: 'TOGGLE_TODO', updatedTodos})
  }
  //const [ todo, updateUseTodo ] = useResource((id) => ({
    //url: `/todos/${id}`,
    //method: 'PUT',
    //data: {id}
  //}))

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    dispatch({type: 'DELETE_TODO', updatedTodos})
  }
  const [ todo, deleteUseTodo ] = useResource((id) => ({
    url: `/todos/${id}`,
    method: 'DELETE',
    data: {id}
  }))

  return (
    <div>
      {todos.map((p, i) => (
         <Todo  {...p} updateTodo={updateTodo} deleteTodo={deleteTodo} deleteUseTodo={deleteUseTodo} key={p.id} />
      ))}
    </div>
  );
}