import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [] }) {
  return (
    <div>
      {todos.map((p, i) => (
         <Todo title={p.title} description={p.description} dateCreated={p.dateCreated} key={"post-" + i} />
      ))}
    </div>
  );
}