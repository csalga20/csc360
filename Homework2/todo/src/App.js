import UserBar from './Userbar';
import CreateTodo from './CreateTodo';
import Header from './Header';
import TodoList from './TodoList';
import React, { useEffect, useReducer, useState, createContext } from 'react';
import appReducer from './reducers';

function App() {
  //const [user, setUser] = useState("")
  //const [todos, setTodos] = useState([])
  const [state, dispatch] = useReducer(appReducer, {user: '', todos: []})

  //const [count, setCount] = useState(0)
  //useEffect(() => {
  //  document.title = 'You clicked ${state.user} times';
  //  console.log('running')
  //}, [count]
  //)

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
      <UserBar user = {state.user} dispatch = {dispatch}/>
      {state.user && <CreateTodo dispatch={dispatch} todos={state.todos}/>}
      <TodoList todos = {state.todos} dispatch={dispatch}/>
    </div>
  );
}
export const ThemeContext = createContext({primary:'blue'})
export default App;
