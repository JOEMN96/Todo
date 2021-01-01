export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE__TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    case "ADD__TODO":
      return {
        ...state,
        todos: [...state.todos, action.data],
      };
    default:
      return state;
  }
};
