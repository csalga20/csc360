import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch}) {
  function updateTodo(index, newTodo)
  {
    const updatedState = [... todos]
    updatedState[index] = newTodo

    //dispatch({type: 'CREATE_TODO', descriptdateCompleted: Date.now(), complete: true})
  }

  return (
    <div>
      {todos.map((p, i) => (
         <Todo title={p.title} description={p.description} dateCreated={p.dateCreated} dateCompleted={p.dateCompleted} complete={p.complete} updateTodo={updateTodo} index={i} key={"post-" + i} />
      ))}
    </div>
  );
}