import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import uuid from 'uuid'
import axios from "axios";

import Header from './components/layouts/Header'
import Logo from './components/layouts/Logo'
import Todos from './components/Todos'
import AddTodoItem from './components/AddTodoItem';
import About from "./components/pages/About";

import './App.css';



class App extends Component {
  // Adding State as a JS Object with an array of objects inside.
  state = {
    todos: [
      // {
      //   id: uuid.v4(), //A unique identifier for each data object 
      //   title: 'Update Personal Website: KathyLambert.me',
      //   completed: false,
      // },
      // {
      //   id: uuid.v4(), //A unique identifier for each data object 
      //   title: 'Finish reading You Don\'t Know JS',
      //   completed: false,
      // },
      // {
      //   id: uuid.v4(), //A unique identifier for each data object 
      //   title: 'Start Wes Bos\' Advanced React Course' ,
      //   completed: false,
      // }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({ todos: res.data }))
    //.then(res => console.log(res.data))
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
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }) // pass thru state object using spread operator (...) to copy everything present within the todos object to access using the filter method.
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))

  }

  // Add Todo Item
  addTodo = (title, id) => {
    // console.log(title)
    // Once confirmed data is returned.  Now add the data to the App.js state using the spread operator and setState. 
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] })
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      id,
      completed: false 
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

// [ ] - Fix 202 Warning error connected to id and unique key
  // id: this.state.todos.length+1 

  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Logo />
            <Header /> 
            <Route exact path='/' render={props => (
              <React.Fragment>
                <Todos todos={this.state.todos} markTodoComplete={this.markTodoComplete} delTodo={this.delTodo} />
                <AddTodoItem addTodo={this.addTodo} />
              </React.Fragment>
            )}/> 
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
