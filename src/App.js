import React, { Component } from 'react';
import Todos from './components/Todos'



import './App.css';

class App extends Component {
  // Adding State as a JS Object with an array of objects inside.
  state = {
    todos: [
      {
        id: 1, //A unique identifier for each data object 
        title: 'Update Personal Website: KathyLambert.me',
        completed: false,
      },
      {
        id: 2, //A unique identifier for each data object 
        title: 'Finish reading You Don\'t Know JS',
        completed: false,
      },
      {
        id: 3, //A unique identifier for each data object 
        title: 'Start Wes Bos\' Advanced React Course' ,
        completed: false,
      }
    ]
  }

  // Toggle Todo Complete 
  markTodoComplete = (id) => {
    // console.log(id) // Confirmed that the onChange functionality with todo ID return.
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
      })
    })
  }

  // Delete (del) Todo
  delTodo = (id) => {
    // console.log(id) // Confirming todo state props passed through to TodoItem.js
    // Using .filter(), a high order array method to manipulate state and loop todos based on the selected ID (or condition) to return a new array without the selected ID.
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }) // pass thru state object using spread operator (...) to copy everything present within the todos object to access using the filter method.
  
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <h4 className='logo'>CodeMeKathy</h4>
        <h1 className='header-title'>Git Sh*t Done!</h1>
        <Todos todos={this.state.todos} markTodoComplete={this.markTodoComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
