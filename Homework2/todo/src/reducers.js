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
        case 'CREATE_TODO':
        const newTodo = {
            title: action.title,
            description: action.description,
            date: action.date,
        };
        return [newTodo, ...state];
        // case 'DELETE_POST':
        //   // implement logic for deleting post
        //   return state.filter(post => post.id != action.id)
        default:
        return state;
    }
}


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        posts: todoReducer(state.posts, action)
    }
}