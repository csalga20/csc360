import UserBar from './Userbar';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div>
      <UserBar user = {user} setUser = {setUser}/>
      {user && <CreateTodo setTodos={setTodos} todos={todos}/>}
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;
