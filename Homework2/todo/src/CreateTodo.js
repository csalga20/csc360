import React, {useState} from "react";

import { useResource } from "react-request-hook";

export default function CreateTodo({ dispatch, todos }) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  //const [ date, setDate ] = useState(new Date().toLocaleString())

  //function handleDate (evt) { setDate(evt.target.value) }
  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleDescription (evt) { setDescription(evt.target.value) }

  const [todo, createTodo] = useResource((newTodo) => ({
    url: "/todos",
    method: "post",
    data: newTodo,
  }));

  function handleCreate () {  
    const newTodo = {
      title,
      description,
      dateCreated: Date.now(),
      dateCompleted: undefined,
      complete: false,
      id: Math.floor(Math.random() * 1000000)
    }

    createTodo(newTodo)
     dispatch({type: 'CREATE_TODO', title, description: description, dateCreated: Date.now(), dateCompleted: undefined, complete: false, id: Math.floor(Math.random()*1000000)})
     dispatch({type: "CREATE_TODO", ...newTodo})
  }

  return (
    <div>
      <h2>Create a New Todo</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
        <div>
          <label htmlFor="create-title">Title:</label>
          <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
        </div>
        <textarea value={description} onChange={handleDescription} />
        <input type="submit" value="Create" />
      </form>
    </div>

  );
}