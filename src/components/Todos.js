import React, { Component } from 'react';
import TodoItem from './TodoItem'

class Todos extends Component {
  render() {
    // console.log(this.props.todos) // The todos come for the state w/in app.js and is passed down as props and accessed with `this.props.todos`.
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todos={todo} />
    ))
  }
}

export default Todos;
