import React from "react";

export default function Todo({ title, description, dateCreated, complete, dateCompleted }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      <i>
        Created on <b>{dateCreated} </b>
      </i>
      <label>
         Completed?
         <input type="checkbox"/>
      </label>
      <i>
        Completed on <b>{dateCompleted}</b>
      </i>
    </div>
  );
}