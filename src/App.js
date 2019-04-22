import React, { Component } from 'react';
import Header from './components/layouts/Header'
import Logo from './components/Logo'
import Todos from './components/Todos'
import AddTodoItem from './components/AddTodoItem';


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

  // Add Todo Item
  addTodo = (title) => {
    // console.log(title)
    // Once confirmed data is returned.  Now add the data to the App.js state using the spread operator. 
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Logo />
          <Header />
          <Todos todos={this.state.todos} markTodoComplete={this.markTodoComplete} delTodo={this.delTodo} />
          <AddTodoItem addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
