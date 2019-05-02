import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// import uuid from 'uuid';

class Todos extends Component {
  
  render() {
    // console.log(this.props.todos) // The todos come for the state w/in app.js and is passed down as props and accessed with `this.props.todos`.
    return this.props.todos.map((todo) => ( //Items mapped through create a list which is why a key is necessary
      <TodoItem key={todo.id} todo={todo} markTodoComplete={this.props.markTodoComplete} delTodo={this.props.delTodo} />
    ))
  }
}

// PropTypes

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markTodoComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}


export default Todos;
