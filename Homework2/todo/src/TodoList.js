import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [] }) {
  return (
    <div>
      {todos.map((p, i) => (
         <Todo title={p.title} description={p.content} key={"post-" + i} />
      ))}
    </div>
  );
}