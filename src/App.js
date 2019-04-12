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
  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <h4 className='logo'>CodeMeKathy</h4>
        <h1 className='header-title'>Git Sh*t Done!</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
