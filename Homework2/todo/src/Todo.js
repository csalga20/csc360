import React from "react";

export default function Todo({ title, description, dateCreated, dateCompleted, complete, updateTodo,index}) {
  function handleCheckbox (evt)
  {
    const newTodo = {
      title,
      description,
      dateCreated,
      dateCompleted: Date.now(),
      complete: evt.target.checked
    }
    updateTodo(index, newTodo)
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      Created on <b>{dateCreated} </b>
      <br />
      Completed?
      <input type="checkbox" value={complete} onChange={handleCheckbox}/>
      <br />
      Completed on <b>{dateCompleted}</b>
    </div>
  );
}