// React is default export of 'react' so no curly braces needed
// Component is not the default export so curly braces are needed
// This says to import the React and Component classes from 'react'
import React, { Component } from 'react';

class ToDo extends Component {
  render () {
    return (
      <li> A todo will go here </li>
    )
  }
}

export default ToDo;
