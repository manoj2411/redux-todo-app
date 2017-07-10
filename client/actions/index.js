/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0;

/*
 * action creators
 */
export const addTodo = text => {
  nextTodoId = nextTodoId + 1
  return {
    type: 'TODO_ADD',
    id: nextTodoId,
    text: text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  }
}
