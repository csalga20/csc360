import UserBar from './Userbar';
import CreateTodo from './CreateTodo';
import Header from './Header';
import TodoList from './TodoList';
import React, { useEffect, useReducer, useState, createContext, useContext } from 'react';
import { useResource } from "react-request-hook";
import appReducer from './reducers';
import StateContext from './Contexts';

function App() {
  const [state, dispatch] = useReducer(appReducer, {user: '', todos: []})

  //const [count, setCount] = useState(0)
  //useEffect(() => {
  //  document.title = 'You clicked ${state.user} times';
  //  console.log('running')
  //}, [count]
  //)
  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      console.log(todos.data.reverse());
      dispatch({ type: "FETCH_TODOS", todos: todos.data });
    }
  }, [todos]);

  useEffect(() => {
    console.log('User effect cooking')
    if(state.user){
      document.title = `${state.user}'s Todos`
    }
    else{
      document.title = 'My Todos'
    }
  }, [state.user]
  )
  useEffect(() => {
    console.log('Todos effect cooking')
  }, [state.todos]
  )
  return (
    <div>
      <ThemeContext.Provider value={{primary:'yellow'}}>
        <Header text="My Todos" />
      </ThemeContext.Provider>
      <StateContext.Provider value={{state, dispatch}}>
        <UserBar user = {state.user} dispatch = {dispatch}/>
        {state.user && <CreateTodo dispatch={dispatch} todos={state.todos}/>}
        <TodoList todos = {state.todos} dispatch={dispatch}/>
      </StateContext.Provider>
    </div>
  );
}
export const ThemeContext = createContext({primary:'blue'})
export default App;
