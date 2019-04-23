// Command Short-cut : 'rce'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodoItem extends Component {
  // Add a component level state to capture the user input into the AddTodoItem input and Confirm data pass thru.
    state = {
      title: ''
    }
 
    onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title)//pass the props for the method name created in App.js
      this.setState({ title: '' }) //resets the state of the input field to blank after submission.
    }

    // Create the required `onChange` event handler to handle the title data state changes. An example of component level state.
    onChange = (e) => this.setState({ title: e.target.value })



    
  render() {
    return (
      <div>  
        <form onSubmit={this.onSubmit} style={{display: 'flex' }}> 
        {/* Add an event handler to handle the state changes submission when the submit btn selected. */}
          <input 
            type='text'
            name='title'
            className='addTodoInput'
            // style={{ flex: '10', padding: '5px' }}
            placeholder='Add New Todo...'
            value={this.state.title}
            onChange={this.onChange}
          />
        <input 
        type="submit" 
        value="Submit"
        className='btn'
        style={{flex: '1 '}}
        />
        </form>
      </div>
    )
  }
}

// PropTypes
AddTodoItem.propTypes = {
  addTodo: PropTypes.func.isRequired,
}


export default AddTodoItem

