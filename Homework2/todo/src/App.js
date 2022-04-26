import Login from './Login';
import Logout from './Logout';
import Registration from './Registration';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <Login />
      <Logout />
      <Registration />
      <CreateTodo setTodos={setTodos} todos={todos}/>
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;
