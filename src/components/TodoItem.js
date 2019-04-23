import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class TodoItem extends Component {

  getTodoStyle = () => {
  // If/Else Option:
  //   if(this.props.todos.completed) {
  //     return {
  //       textDecoration: 'line-through'
  //     }
  //   } else {
  //     return {
  //       textDecoration: 'none'
  //     }
  //   }

  // }
  // Turnery Operator Option:
    return {
      background: 'white',
      textDecoration: this.props.todo.completed ?
      'line-through': 'none'
      }
    }

  markTodoComplete = (e) => {
    console.log(this.props) // Without state manager component drilling is utilized to access prop and update.
  }

  render() {
    const { id, title, completed } = this.props.todo // Used destructuring to pull the variables out of the todo props.
    return (
      // {{inlineStyling}} vice {variable Styling}
      <div className='todoDiv' style={this.getTodoStyle()}> 
        {/* <h4 className='todos' >{ this.props.todos.title  }</h4> */}
        <h4 className='todos' >
        <input 
          type="checkbox" 
          name="checkbox" 
          className="checkbox"
          onChange={this.props.markTodoComplete.bind(this, id)}
          checked={this.props.todo.completed ? 'checked' : ''} /> 
        {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} className='btnStyle'> x </button>
        </h4>
      </div>
        )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markTodoComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}



// CSS Variables

// const todoStyle = {
//   backgroundColor: '#eeeeee'
// }




export default TodoItem
