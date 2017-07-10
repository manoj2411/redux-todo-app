import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    }
  }
}

class TodoForm extends React.Component {

  render() {
    let input;

    return(
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.addTodo(input.value)
          // dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
      <div className="input-group">
        <input type="text" className="form-control" placeholder="New todo item..."
          ref={node => {
            input = node
          }}
        />
        <span className="input-group-btn">
          <input className="btn btn-default" type="submit" value="Add" />
        </span>
      </div>
      </form>
    );
  }
}

TodoForm = connect(undefined, mapDispatchToProps)(TodoForm);

export default TodoForm;
