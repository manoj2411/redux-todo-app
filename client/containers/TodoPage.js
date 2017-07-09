import React from 'react';
import { connect } from 'react-redux';
import TodoList from  '../components/Todo/TodoList';
import { toggleTodo, VisibilityFilters } from '../actions';
import Footer from './Footer';


function filteredTodos(todos, currentFilter) {
  switch(currentFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return (
        todos.filter( filter => {
          return filter.completed
        })
      )
    case VisibilityFilters.SHOW_ACTIVE:
      return (
        todos.filter( filter => {
          return !filter.completed
        })
      )
  }
}

const mapStateToProps = state => {
  return {
    todos: filteredTodos(state.todos, state.visibilityFilter)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}


class TodoPage extends React.Component {

  render() {
     const todos = this.props.todos;
    return(
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <h2> Todo List </h2>
              <TodoList
                todos={todos}
                onTodoClick={this.props.onTodoClick}
              />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}



TodoPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage)

export default TodoPage;
