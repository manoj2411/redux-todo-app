import React from 'react';
import { connect } from 'react-redux';
import TodoList from  '../components/Todo/TodoList';
import { toggleTodo } from '../actions';
import Footer from './Footer';


const mapStateToProps = state => {
  return {
    todos: state.todos
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
