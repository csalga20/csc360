function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
}

function todoReducer(state, action) {
    switch(action.type) {
        case "FETCH_TODOS":
            return action.todos;
        case 'CREATE_TODO':
        const newTodo = {
            title: action.title,
            description: action.description,
            dateCreated: action.dateCreated,
            dateCompleted: action.dateCompleted,
            complete: action.complete,
            id: action.id
        };
        return [newTodo, ...state];
        case 'TOGGLE_TODO':
            return action.updatedTodos
        //return null;
         case 'DELETE_TODO':
             return action.updatedTodos
        default:
        return state;
    }
}


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}