import React from "react";

export default function Todo({ title, description, dateCreated, complete, dateCompleted }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      <i>
        Created on <b>{dateCreated}</b>
        Completed: <b>{complete}</b>
        Completed on <b>{dateCompleted}</b>
      </i>
    </div>
  );
}