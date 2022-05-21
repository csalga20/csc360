import UserBar from './Userbar';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import React, { useReducer, useState } from 'react';
import appReducer from './reducers';

function App() {
  //const [user, setUser] = useState("")
  //const [todos, setTodos] = useState([])
  const [state, dispatch] = useReducer(appReducer, {user: '', todos: []})
  return (
    <div>
      <UserBar user = {state.user} dispatch = {dispatch}/>
      {state.user && <CreateTodo dispatch={dispatch} todos={state.todos}/>}
      <TodoList todos = {state.todos} dispatch={dispatch}/>
    </div>
  );
}

export default App;
