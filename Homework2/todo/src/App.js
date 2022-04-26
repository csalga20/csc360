import Login from './Login';
import Logout from './Logout';
import Registration from './Registration';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState(new Date().getFullYear())
  const [todos, setTodos] = useState([])

  function handleDate (evt) { setDate(evt.target.value) }

  return (
    <div>
      <Login />
      <Logout />
      <Registration />
      <CreateTodo dateCreated={date} setTodos={setTodos} todos={todos}/>
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;
