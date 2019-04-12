import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        {/* <h4 className='todos' >{ this.props.todos.title  }</h4> */}
      <input type="checkbox" name="checkbox" className="checkbox"/><h4 className='todos' >{ this.props.todos.title  }</h4>
      </div>
        )
  }
}

export default TodoItem
