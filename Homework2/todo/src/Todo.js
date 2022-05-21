import React, { useState } from "react";

export default function Todo({ title, description, dateCreated, dateCompleted, complete, id, updateTodo, deleteTodo}) {

  const [checked, updatedChecked] = useState(false)
  const handleToggleEvent = (event) => {
    updatedChecked(event.target.checked)

    const updatedTodo = {title, description, dateCreated, id, dateCompleted: Date.now(), complete: !complete}
    updateTodo(id, updatedTodo)
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      Created on <b>{dateCreated} </b>
      <br />
      Completed?
      <input type="checkbox" value={checked} onClick={handleToggleEvent}/>
      <br />
      Completed on <b>{dateCompleted}</b>
      <br />
      <input type="button" value="Delete todo"onClick={() => deleteTodo(id)}/>
    </div>
  );
}