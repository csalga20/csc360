import React, {useState} from "react";

export default function CreateTodo({ dispatch, todos }) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ date, setDate ] = useState(new Date().toLocaleString())

  function handleDate (evt) { setDate(evt.target.value) }
  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleDescription (evt) { setDescription(evt.target.value) }
  function handleCreate (evt) {  
    //const newTodo = { title, description, dateCreated: date}
    //console.log(newPost)
    // const newPostCopy = { ...newPost }
     //setTodos([newTodo, ...todos])
     dispatch({type: 'CREATE_TODO', title, description})
  }

  return (
    <>
    <h2>Create a New Todo</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        Date: <b>{handleDate}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={description} onChange={handleDescription} />
      <input type="submit" value="Create" />
    </form>
    </>

  );
}