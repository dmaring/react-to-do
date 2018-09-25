// React is default export of 'react' so no curly braces needed
// Component is not the default export so curly braces are needed
// This says to import the React and Component classes from 'react'
import React, { Component } from 'react';

class ToDo extends Component {
  render () {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
        <button onClick={ this.props.deleteTodo }>
          Delete item
        </button>
      </li>
    )
  }
}

export default ToDo;
