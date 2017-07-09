const defaultTodos = [
  {
    id: 10,
    text: 'This is sample todo task 1',
    completed: false
  },
  {
    id: 11,
    text: 'This is simpile todo task 2',
    completed: false
  }
]
const todos = (state = defaultTodos, action) => {

  switch(action.type) {
    case 'TODO_ADD':
      return [...state, {text: action.text, id: action.id, completed: false}]
    case 'TOGGLE_TODO':
      return state.map(function(todo) {
        if(todo.id == action.id) {
          return Object.assign({}, todo, {completed: !todo.completed})
        }
        else {
          return todo;
        }
      });
    default:
      return state
  }
}

export default todos;
