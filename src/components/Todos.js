import React, { Component } from 'react';


class Todos extends Component {
  render() {
    console.log(this.props.todos) // The todos come for the state w/in app.js and is passed down as props and accessed with `this.props.todos`.
    return (
      <div>
        <h1>Todos</h1>
      </div>
    );
  }
}

export default Todos;
