// Short-cut Command: 'rce'

import React, { Component } from 'react'

export class AddTodoItem extends Component {
  render() {
    return (
      <div>
        <form style={{display: 'flex' }}>
          <input type="text"
            name='name'
            style={{ flex: '10', padding: '5px' }}
            placeholder='Add New Todo'
        />
        <input 
        type="submit" 
        value="Submit"
        className='btn'
        style={{flex: '10'}}
        />
        </form>
      </div>
    )
  }
}

export default AddTodoItem

