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
    const { id, title } = this.props.todo // Used destructuring to pull the variables out of the todo props.
    return (
      // {{inlineStyling}} vice {variable Styling}
      <div className='todoDiv' style={this.getTodoStyle()}> 
        {/* <h4 className='todos' >{ this.props.todos.title  }</h4> */}
        <h4 className='todos' >
        <input type="checkbox" name="checkbox" className="checkbox" onChange={this.props.markTodoComplete.bind(this, id)} /> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}> x </button>
        </h4>
      </div>
        )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// CSS Variables

// const todoStyle = {
//   backgroundColor: '#eeeeee'
// }

const btnStyle = {
  background: '#F9A799',
  borderRadius: '50%',
  cursor: 'wait',
  float: 'right',
  border: 'none',
  padding: '5px 3px',
}

export default TodoItem
